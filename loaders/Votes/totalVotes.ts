import { FnContext } from "deco/mod.ts";

type Props = unknown;

export type Result = {
  total: number;
};

export default async function TotalVotes(
  _props: Props,
  _req: Request,
  _ctx: FnContext,
): Promise<Result> {
  const query = await fetch(
    `https://camp-api.deco.cx/events`,
    {
      headers: {
        "x-api-key": "mathe",
      },
    },
  );

  if (!query.ok) {
    throw new Error(
      "Something went wrong! We cannot retrieve total votes information.",
    );
  }
  const res = await query.json();
  return res;
}
