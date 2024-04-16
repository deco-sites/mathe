import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

type Props = {
  current_page: number;
  total_per_page: number;
  images: ImageWidget[];
};

export default function PartialGallery({
  current_page = 0,
  images,
  total_per_page,
}: Props) {
  const imagesToShow = images.slice(
    0,
    !current_page ? total_per_page : current_page * total_per_page,
  );

  const alreadyRenderedAllImages =
    (!current_page ? 1 : current_page) * total_per_page >= images.length;

  return (
    <div class="md:container mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4">
        {imagesToShow.map((img) => (
          <div class="w-full object-cover aspect-square overflow-hidden">
            <Image
              class="w-full object-cover aspect-square hover:scale-125 transition-transform duration-1000 ease-in-out"
              src={img}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      {!alreadyRenderedAllImages && (
        <button
          class="rounded-md grid mx-auto my-6 btn btn-wide bg-orange-900 text-neutral-200"
          {...usePartialSection({
            props: {
              current_page: !current_page ? 2 : current_page + 1,
              total_per_page,
            },
          })}
        >
          Carregar mais imagens
        </button>
      )}
    </div>
  );
}
