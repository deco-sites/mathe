import { ImageWidget } from "apps/admin/widgets.ts";
import HeroImageBanner from "deco-sites/mathe/components/layout/HeroImageBanner.tsx";

export type CouponBanner = {
  couponCode: string;
  description?: string;
  image?: ImageWidget;
  isActive?: boolean;
};

const CouponBanner = (props: CouponBanner) => {
  const { couponCode } = props;
  const description = props.description;

  if (!props.isActive) return null;

  if (props.image) {
    return (
      <HeroImageBanner image={props.image} contentPosition="left">
        <div class="bg-neutral-50 group flex flex-col m-auto my-8 w-min items-center justify-center p-3 rounded-md border border-neutral-300 hover:shadow-lg ease-in-out hover:scale-105 transition-all duration-200">
          <div class="flex gap-2 items-center justify-center bg-orange-900 group-hover:bg-orange-800 text-neutral-50 p-3 rounded-md">
            <b>Cupom:</b>
            <div class="text-neutral-800 bg-neutral-50 rounded-md p-2">
              {couponCode}
            </div>
          </div>
          {description && (
            <div class="text-sm text-gray-400 text-center w-80 mt-4">
              {description}
            </div>
          )}
        </div>
      </HeroImageBanner>
    );
  }

  return (
    <div class="bg-neutral-50 flex flex-col m-auto my-8 w-min items-center justify-center p-3 rounded-md border border-neutral-300 hover:shadow-lg transition-shadow ease-in-out duration-100">
      <div class="flex gap-2 items-center justify-center bg-orange-900 hover:bg-orange-800 text-neutral-50 p-3 rounded-md">
        <b>Cupom:</b>
        <div class="text-neutral-800 bg-neutral-50 rounded-md p-2">
          {couponCode}
        </div>
      </div>
      {description && (
        <div class="text-sm text-gray-400 w-52 mt-4">{description}</div>
      )}
    </div>
  );
};

export default CouponBanner;
