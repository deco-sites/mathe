import { FnContext } from "deco/mod.ts";

export type TotalVotes = number;

export default async function TotalVotesLoader(
  _: unknown,
  _req: Request,
  _ctx: FnContext,
): Promise<TotalVotes> {
  const query = await fetch("http://www.randomnumberapi.com/api/v1.0/random");
  if (!query.ok) return 0;
  const res = await query.json();
  return res[0];
}
