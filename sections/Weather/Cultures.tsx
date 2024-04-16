import type { Props as RichTextType } from "deco-sites/mathe/sections/Content/RichText.tsx";
import type { Props as WeatherType } from "./Weather.tsx";
import RichText from "deco-sites/mathe/sections/Content/RichText.tsx";
import Weather from "./Weather.tsx";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

type Culture = {
  name: string;
  location: string;
  description: RichTextType;
  temperature: WeatherType;
  images: ImageWidget[];
};

export type Props = {
  cultures: Culture[];
};

export default function Cultures({ cultures }: Props) {
  if (!cultures) return;
  return (
    <div class="flex flex-col md:flex-row gap-10 lg:container lg:mx-auto">
      {cultures.map((culture) => (
        <div class="text-neutral-500 my-4 flex flex-col p-3 gap-2 justify-items-start">
          <h2 class="text-3xl text-neutral-900">{culture?.name}</h2>
          <div class="flex flex-col justify-items-start items-start">
            <RichText {...culture.description} />
            <Weather {...culture.temperature} />
            <div class="flex flex-col gap-6">
              {culture?.images?.map((img) => (
                <Image
                  class="w-full"
                  src={img}
                  alt={img}
                  width={500}
                  height={500}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
