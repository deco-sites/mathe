import { useCallback } from "preact/hooks";
import { Signal, useSignal } from "@preact/signals";
import { invoke } from "deco-sites/mathe/runtime.ts";
import {
  toast,
} from "https://esm.sh/react-toastify@9.1.1?&external=react,react-dom&alias=react/jsx-runtime:preact/jsx-runtime&deps=preact@10.19.2&target=es2022";
import { sendEvent } from "deco-sites/mathe/sdk/analytics.tsx";

const LikesLabel = ({ likes }: { likes: Signal<number> }) => {
  const isLiked = likes.value !== 0;

  if (!isLiked) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-mood-smile"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M9 10l.01 0" />
        <path d="M15 10l.01 0" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
      </svg>
    );
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-mood-check"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
      <div class="text-base">{likes.value}</div>
    </>
  );
};

export default function LikeButton({ productId }: { productId: string }) {
  const likes = useSignal<number>(0);

  const updateTotalVotes = useCallback(
    (type: "increase" | "decrease" = "increase") => {
      const el = document?.querySelector("[data-js-total-votes]");
      if (!el?.textContent) return;
      if (type === "decrease") {
        el.textContent = (Number(el.textContent) - 1).toString();
        return;
      }
      el.textContent = (Number(el.textContent) + 1).toString();
    },
    [],
  );

  const updateProductLikes = useCallback(() => {
    likes.value = likes.value + 1;
    updateTotalVotes();
    sendEvent({
      name: "post_score",
      params: {
        score: likes.value,
      },
    });

    invoke["deco-sites/mathe"].actions
      .vote({
        productId: Number(productId),
      })
      .then((res) => {
        if (!res.product) {
          likes.value = likes.value - 1;
          updateTotalVotes("decrease");
        }

        likes.value = res.product;
        toast("Obrigado pelo seu voto", {
          toastId: "likesToast",
        });
      });
  }, []);

  const getProductVotes = useCallback((productId: number) => {
    invoke["deco-sites/mathe"].loaders.Votes.productVotes({
      productId,
    }).then((res) => {
      const initialVotes = res.product;
      likes.value = initialVotes;
    });
  }, []);

  getProductVotes(Number(productId));

  return (
    <>
      <button
        type="button"
        class="btn btn-outline w-full mt-auto mb-2 border-orange-900 text-[.625rem] uppercase text-orange-900 font-bold px-4 rounded-md hover:bg-neutral-300"
        onClick={updateProductLikes}
      >
        <LikesLabel likes={likes} />
      </button>
    </>
  );
}
