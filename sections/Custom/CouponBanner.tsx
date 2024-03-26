export type CouponBanner = {
  couponCode: string;
  description?: string;
};

const CouponBanner = (props: CouponBanner) => {
  const { couponCode } = props;
  const description = props.description;

  return (
    <div class="flex flex-col m-auto my-8 w-min items-center justify-center p-3 rounded-md border border-neutral-300 hover:shadow-lg transition-shadow ease-in-out duration-100">
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
