import { FnContext } from "deco/mod.ts";

type Props = {
  productId: number | string;
};

type Result = {
  product: number;
};

export default async function ProductVotes(
  props: Props,
  _req: Request,
  _ctx: FnContext,
): Promise<Result> {
  const query = await fetch(
    `https://camp-api.deco.cx/event/${props.productId}`,
    {
      headers: {
        "x-api-key": "mathe",
      },
    },
  );

  if (!query.ok) throw new Error("ProductId not found or unavailable");
  const res = await query.json();
  return res;
}
