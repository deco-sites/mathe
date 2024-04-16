import { MatchContext } from "deco/blocks/matcher.ts";

export type Props = {
  campaign: string;
};

export default function UTM(props: Props, ctx: MatchContext) {
  const currentUrl = new URL(ctx.request.url);
  const currentUtmCampaign = currentUrl.searchParams.get("utm_campaign");

  return currentUtmCampaign === props.campaign;
}
