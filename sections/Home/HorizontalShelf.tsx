import Image from "apps/website/components/Image.tsx";
import ProductCardCustom, {
  ProductCardErrorTemplate,
  ProductCardPlaceholder,
} from "deco-sites/mathe/components/product/ProductCardCustom.tsx";
import type { Product } from "apps/commerce/types.ts";
import type { ProductError } from "deco-sites/mathe/components/product/ProductCardCustom.tsx";
import type { ProductCardWidth } from "deco-sites/mathe/components/product/ProductCardCustom.tsx";
import { AppContext } from "deco-sites/mathe/apps/site.ts";
import { Head } from "$fresh/runtime.ts";

export type Props = {
  products: Product[] | null;
  productCardWidth: ProductCardWidth;
  shelfColumns?: number;
  animateImage?: boolean;
};

let currentSectionProps: Props | undefined;
let currentSectionCtx: AppContext | undefined;

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  currentSectionProps = props;
  currentSectionCtx = ctx;
  return props;
};

export const LoadingFallback = () => {
  const products = new Array(6).fill(0);

  return (
    <>
      <div
        class={`grid rounded-md ${`md:grid-cols-${currentSectionProps?.shelfColumns}`} gap-2 md:p-16 m-4`}
      >
        {products.map((_) => <ProductCardPlaceholder />)}
      </div>
    </>
  );
};

export function ErrorFallback({ error: _ }: { error?: Error }) {
  const products: ProductError[] = [
    {
      imageUrl:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4832/86964f04-1371-4823-84e0-b65e937660ce",
      title: "Descubra o Sabor do Brasil com o Nosso Açaí da Terra!",
      description:
        "Descubra a riqueza dos sabores brasileiros com o nosso Açaí da Terra. Uma combinação deliciosa de granola crocante, mirtilos suculentos, flocos de coco exóticos e fatias de morango vibrantes. Uma celebração dos sabores autênticos do Brasil em cada colherada. Experimente hoje! 🍓🥥",
    },
    {
      imageUrl:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4832/6a281eef-3647-41cb-be7e-8fc8ab85e9d4",
      title: "A Autenticidade do Dendê Brasileiro!",
      description:
        "Experimente o sabor único do nosso Azeite-de-Dendê. Extraído da palmeira africana, é um ingrediente fundamental na culinária afro-brasileira, trazendo um toque exótico e vibrante para seus pratos. Experimente hoje! 🌴",
    },
    {
      imageUrl:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4832/4beef165-fcd1-4b7e-a379-aa8a219ca3aa",
      title: "A Tradição do Berimbau Brasileiro!",
      description:
        "Descubra a música brasileira com o nosso Berimbau. Este instrumento musical afro-brasileiro é essencial para a prática da capoeira. Sinta a batida e entre no ritmo! 🎶",
    },
    {
      imageUrl:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4832/1c297763-1eb6-42ea-9558-3a9d1192c1f9",
      title: "A Elegância da Moda Afro-Brasileira!",
      description:
        "Vista-se com a nossa Roupa Afro-Brasileira. Feita com tecidos vibrantes e estampas étnicas, esta peça de vestuário reflete a rica cultura afro-brasileira. Vista-se com estilo e celebre a diversidade! 👗",
    },
    {
      imageUrl:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4832/7b8d7114-535c-4af7-a2ea-4ca83ea69491",
      title: "A Praticidade do Tipiti Indígena!",
      description:
        "Conheça o nosso Tipiti. Este espremedor de palha trançada é usado tradicionalmente pelos povos indígenas da Amazônia para prensar a raiz moída de mandioca. Adicione um toque de tradição à sua cozinha! 🍴",
    },
    {
      imageUrl:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4832/7ea2a754-a68a-4f48-828d-4d2d7a9a3c79",
      title: "A Beleza da Vestimenta Indígena Brasileira!",
      description:
        "Vista-se com a nossa Roupa Indígena Brasileira. Feita com materiais naturais e adornada com penas e fibras, esta peça de vestuário reflete a conexão profunda dos povos indígenas com a natureza. Vista-se com respeito e celebre a cultura indígena! 👕",
    },
  ];

  return (
    <>
      <div
        class={`grid rounded-md ${`md:grid-cols-${currentSectionProps?.shelfColumns}`} gap-2 md:p-16 m-4`}
      >
        {products.map((p: ProductError) => (
          <ProductCardErrorTemplate
            product={p}
            animateImage={currentSectionProps?.animateImage as boolean}
            productCardWidth={currentSectionProps
              ?.productCardWidth as ProductCardWidth}
          />
        ))}
      </div>
    </>
  );
}

export default function HorizontalShelf({
  products,
  productCardWidth,
  shelfColumns = 1,
  animateImage = false,
}: Props) {
  if (!products) return null;
  currentSectionProps = {
    products,
    productCardWidth,
    shelfColumns,
    animateImage,
  };
  // Simulating an Error
  // const isError = true;
  const isError = Math.random() <= 0.2;
  const hasMultipleColumns = shelfColumns !== 1;

  if (isError) return products[9]["@id"];

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/toastify/toastify.css" />
      </Head>
      <div
        class={`grid rounded-md ${
          hasMultipleColumns ? `md:grid-cols-${shelfColumns}` : ""
        } gap-2 md:p-16 m-4`}
      >
        {products.map((product) => (
          <ProductCardCustom
            product={product}
            productCardWidth={productCardWidth}
            animateImage={animateImage}
          />
        ))}
      </div>
    </>
  );
}
