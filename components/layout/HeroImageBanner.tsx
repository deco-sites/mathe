import Image from "apps/website/components/Image.tsx";
import type { ComponentChildren } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";

export type Props = {
  image: ImageWidget;
  contentPosition: "left" | "center" | "right";
  children: ComponentChildren;
};

const position = {
  left: "left-4",
  center: "left-1/2 -translate-x-1/2",
  right: "right-4",
};

export default function HeroImageBanner(
  { image, contentPosition = "left", children }: Props,
) {
  return (
    <div class="relative grid content-center lg:container py-10 h-96">
      <Image
        class="flex items-center justify-center absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={image}
        alt="Promoção Deco.day, garanta 5% OFF"
        width={650}
        height={400}
      />
      <div class={`${position[contentPosition]}`}>
        {children}
      </div>
    </div>
  );
}
