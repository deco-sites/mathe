export { onBeforeResolveProps } from "apps/website/utils/multivariate.ts";
import { MultivariateFlag } from "deco/blocks/flag.ts";
import multivariate, {
  MultivariateProps,
} from "apps/website/utils/multivariate.ts";

import type { ProductDetailsPage } from "apps/commerce/types.ts";

export default function (
  props: MultivariateProps<ProductDetailsPage>,
): MultivariateFlag<ProductDetailsPage> {
  return multivariate(props);
}
