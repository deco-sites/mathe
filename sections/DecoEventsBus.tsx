import { scriptAsDataURI } from "apps/utils/dataURI.ts";

export default function DecoEventsBus(_props: unknown) {
  return (
    <script
      defer
      src={scriptAsDataURI(() => {
        globalThis.window.DECO.events.subscribe((ev) => console.log(ev));
      })}
    />
  );
}
