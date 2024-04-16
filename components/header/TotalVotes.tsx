import LabelWithIcon from "deco-sites/mathe/components/layout/LabelWithIcon.tsx";
import FriendsIcon from "deco-sites/mathe/components/icons/Friends.tsx";
import { Result } from "deco-sites/mathe/loaders/Votes/totalVotes.ts";
import Loading from "deco-sites/mathe/components/daisy/Loading.tsx";

export const LoadingFallback = () => {
  return (
    <div class="min-w-12">
      <LabelWithIcon Icon={<FriendsIcon />}>
        <Loading style="loading-spinner" size="loading-xs" />
      </LabelWithIcon>
    </div>
  );
};

export default function TotalVotes({
  totalVotes,
}: {
  totalVotes: Result;
}) {
  return (
    <div class="min-w-12">
      <LabelWithIcon Icon={<FriendsIcon />}>
        <div data-js-total-votes={totalVotes?.total} class="text-xs font-thin">
          {totalVotes?.total}
        </div>
      </LabelWithIcon>
    </div>
  );
}
