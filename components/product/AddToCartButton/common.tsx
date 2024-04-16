import { AddToCartParams } from "apps/commerce/types.ts";
import { useState } from "preact/hooks";
import Button from "../../../components/ui/Button.tsx";
import { sendEvent } from "../../../sdk/analytics.tsx";
import { useUI } from "../../../sdk/useUI.ts";

import {
  toast,
} from "https://esm.sh/react-toastify@9.1.1?&external=react,react-dom&alias=react/jsx-runtime:preact/jsx-runtime&deps=preact@10.19.2&target=es2022";

export interface Props {
  /** @description: sku name */
  eventParams: AddToCartParams;
  onAddItem: () => Promise<void>;
}

const useAddToCart = ({ eventParams, onAddItem }: Props) => {
  const [loading, setLoading] = useState(false);
  const { displayCart } = useUI();

  const sendToast = (message: string) => {
    toast(message, {
      position: "bottom-left",
    });
  };

  const onClick = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);

      await onAddItem();

      sendEvent({
        name: "add_to_cart",
        params: eventParams,
      });

      sendToast("Produto adicionado ao carrinho!");
      displayCart.value = true;
    } finally {
      setLoading(false);
    }
  };

  return { onClick, loading, "data-deco": "add-to-cart" };
};

export default function AddToCartButton(props: Props) {
  const btnProps = useAddToCart(props);

  return (
    <>
      <Button
        {...btnProps}
        class="btn md:w-max md:mt-auto w-24 bg-orange-900 text-[.625rem] uppercase text-neutral-50 font-bold p-1 py-2 md:p-4 rounded-md hover:bg-orange-800"
      >
        Adicionar ao carrinho
      </Button>
    </>
  );
}
