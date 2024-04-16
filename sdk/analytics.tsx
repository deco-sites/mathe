import type { AnalyticsEvent } from "apps/commerce/types.ts";

export type PostScore = {
  name: string;
  params: {
    score: number;
  };
};

export const sendEvent = <E extends AnalyticsEvent | PostScore>(event: E) => {
  console.log(JSON.stringify(event, null, 2));
  globalThis.window.DECO.events.dispatch(event);
};
