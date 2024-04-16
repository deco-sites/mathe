import { FnContext } from "deco/mod.ts";

type Props = {
  productId: number;
};

type Result = {
  total: number;
  product: number;
};

export default async function vote(
  { productId }: Props,
  _req: Request,
  _ctx: FnContext,
): Promise<Result> {
  const payload = {
    productId,
  };

  const query = await fetch(`https://camp-api.deco.cx/event`, {
    method: "POST",
    headers: {
      "x-api-key": "mathe",
    },
    body: JSON.stringify(payload),
  });

  if (!query.ok) throw new Error("ProductId not found or unavailable");
  const res = await query.json();
  return res;
}
