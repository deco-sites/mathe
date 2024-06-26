import Image from "apps/website/components/Image.tsx";
import type { Product } from "apps/commerce/types.ts";
import { useOffer } from "../../sdk/useOffer.ts";

import LikeButton from "../../islands/LikeButton.tsx";
import AddToCartButtonVtex from "../../islands/AddToCartButton/vtex.tsx";

export type ProductCardWidth =
  | "max-w-xl"
  | "max-w-2xl"
  | "max-w-3xl"
  | "max-w-4xl"
  | "max-w-5xl"
  | "max-w-6xl"
  | "max-w-7xl"
  | "max-w-full";

export type Props = {
  product: Product;
  productCardWidth: ProductCardWidth;
  animateImage: boolean;
};

export type ProductError = {
  imageUrl: string;
  title: string;
  description: string;
};

export const ProductCardErrorTemplate = ({
  product,
  productCardWidth,
  animateImage,
}: {
  product: ProductError;
  productCardWidth: ProductCardWidth;
  animateImage: boolean;
}) => {
  const { imageUrl, title, description } = product;
  //
  // productCardWidth={productCardWidth}
  // animateImage={animateImage}

  return (
    <div
      class={`${productCardWidth} flex flex-row items-start rounded-sm bg-neutral-50 p-4 gap-4 shadow-md hover:scale-[1.0125] hover:shadow-2xl transition-all duration-150 ease-in-out`}
    >
      <div
        class={"min-w-20 max-w-20 max-h-full md:min-w-32 md:min-h-32 md:max-w-32 md:max-h-32 md:grow aspect-square object-cover bg-white rounded-sm overflow-hidden"}
      >
        <Image
          class={`${
            animateImage ? "animate-slowZoomIn" : ""
          } min-w-20 max-w-20 max-h-full md:min-w-32 md:min-h-32 md:max-w-32 md:max-h-32 md:grow aspect-square object-cover bg-white rounded-sm`}
          src={imageUrl}
          width={125}
          height={125}
        />
      </div>
      <div class="grow">
        <div class="line-clamp-2 text-ellipsis text-base md:text-xl text-neutral-800">
          <b>{title}</b>
        </div>
        <div class="text-neutral-500 text-ellipsis line-clamp-2 md:line-clamp-3 text-sm md:text-base">
          {description}
        </div>
      </div>
      <div class="flex-none md:w-max md:ml-auto flex flex-col h-full pl-4 border-solid border-l-[1px] md:border-t-0  border-neutral-200 ">
        <div class="line-through text-xs md:text-sm text-neutral-500"></div>
        <div class="mb-2 text-base md:text-xl font-semibold text-orange-950">
        </div>
        <a class="btn md:mt-auto w-24 bg-orange-900 text-[.625rem] uppercase text-neutral-50 font-bold p-1 py-2 md:p-4 rounded-md hover:bg-orange-800 md:w-[169.85px]">
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export const ProductCardPlaceholder = () => {
  return (
    <div class="flex flex-row items-start rounded-sm bg-neutral-50 p-4 gap-4 shadow-md hover:scale-[1.0125] hover:shadow-2xl transition-all duration-150 ease-in-out">
      <div class="skeleton min-w-20 min-h-20 md:w-32 md:h-32 bg-neutral-300">
      </div>
      <div class="grow flex flex-col md:flex-row">
        <div class="grow flex flex-col">
          <div class="text-base md:text-xl text-neutral-400">
            <b>Carregando...</b>
          </div>
          <div class="text-neutral-300 text-sm md:text-base">
            Estamos preparando tudo para você
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col md:flex-row my-1 md:my-0">
            <div class="flex-none md:w-max md:ml-auto flex flex-col h-full md:pl-4 md:border-t-0">
              <div class="skeleton line-through text-sm text-neutral-300 min-w-8 h-3 mb-2 md:h-5">
              </div>
              <div class="md:hidden skeleton bg-neutral-300 mb-2 text-xl font-semibold text-neutral-300 min-w-24 h-3 md:h-5">
              </div>
              <div class="flex gap-2 md:flex-col md:gap-0">
                <button
                  type="button"
                  class="btn btn-outline md:w-full mt-auto mb-2 border-neutral-300 text-[.625rem] uppercase text-neutral-300 font-bold px-4 rounded-md hover:bg-neutral-300"
                >
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
                </button>
                <button class="md:w-max md:mt-auto w-full bg-neutral-300 skeleton text-[.625rem] uppercase text-neutral-50 font-bold p-1 py-2 mb-2 md:p-4 rounded-md">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCardCustom = ({
  product,
  productCardWidth,
  animateImage,
}: Props) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const getProductPrice = (
    product: Product,
    type: "price" | "listPrice" = "price",
  ) => {
    const offers = useOffer(product?.offers);
    const currPrice = offers?.[type];
    if (!currPrice) return;
    return formatter.format(currPrice);
  };

  return (
    <div
      class={`${productCardWidth} flex flex-row items-start rounded-sm bg-neutral-50 p-4 gap-4 shadow-md hover:scale-[1.0125] hover:shadow-2xl transition-all duration-150 ease-in-out`}
    >
      <div class="${} min-w-20 max-w-20 max-h-full md:min-w-32 md:min-h-32 aspect-square object-cover bg-white rounded-sm overflow-hidden">
        <Image
          class={`${
            animateImage ? "animate-slowZoomIn" : ""
          } min-w-20 max-w-20 max-h-full md:min-w-32 md:min-h-32 aspect-square object-cover bg-white rounded-sm`}
          src={product?.image?.[0]?.url ?? ""}
          width={125}
          height={125}
        />
      </div>
      <div class="grow flex flex-col md:flex-row">
        <div class="flex flex-col">
          <div class="line-clamp-2 md:line-clamp-3 text-ellipsis text-base md:text-xl text-neutral-800">
            <b>{product?.isVariantOf?.name}</b>
          </div>
          <div class="text-neutral-500 text-ellipsis line-clamp-2  md:line-clamp-3 text-sm md:text-base my-1 md:my-0">
            {(product?.description?.length as number) <= 150
              ? product.description
              : product?.description?.slice(0, 150)}
          </div>
        </div>
        <div class="flex-none md:w-max md:ml-auto flex flex-col h-full md:pl-4 ">
          {" "}
          <div class="flex items-center gap-2">
            {getProductPrice(product, "listPrice") && (
              <div class="line-through text-xs md:text-sm text-neutral-500 align-middle">
                {getProductPrice(product, "listPrice")}
              </div>
            )}
            {getProductPrice(product) && (
              <div class="text-base md:text-xl font-semibold text-orange-950">
                {getProductPrice(product)}
              </div>
            )}
          </div>
          <div class="flex gap-2 md:flex-col md:gap-0">
            <LikeButton productId={product.productID} />
            <AddToCartButtonVtex
              productID={product.productID}
              seller="1"
              eventParams={{
                items: [{
                  quantity: 1,
                  item_name: product.name,
                  item_id: product.sku,
                }],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCustom;
