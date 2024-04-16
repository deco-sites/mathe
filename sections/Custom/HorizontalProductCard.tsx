import ProductCard, {
  ProductCardPlaceholder,
} from "deco-sites/mathe/components/product/ProductCardCustom.tsx";

import type { Props } from "deco-sites/mathe/components/product/ProductCardCustom.tsx";

export function LoadingFallback() {
  return <ProductCardPlaceholder />;
}

export default function HorizontalProductCard(props: Props) {
  return (
    <div class="md:container mx-auto">
      <ProductCard
        product={props.product}
        animateImage={props.animateImage}
        productCardWidth={props.productCardWidth}
      />
    </div>
  );
}
