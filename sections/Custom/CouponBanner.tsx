export type CouponBanner = {
  couponCode: string;
  description?: string;
};

const CouponBanner = (props: CouponBanner) => {
  const { couponCode } = props;
  const description = props.description;

  return (
    <>
      <div>
        <b>Cupom: </b>
        {couponCode}
      </div>
      {description && <div>{description}</div>}
    </>
  );
};

export default CouponBanner;
