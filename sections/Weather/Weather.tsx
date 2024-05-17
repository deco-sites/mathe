import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  city: string;
  temperature?: Temperature | null;
  shouldFloat?: boolean;
}

export default function Weather(
  { temperature, city, shouldFloat = false }: Props,
) {
  if (shouldFloat) {
    return (
      <div class="fixed bg-zinc-50 bg-opacity-70 bottom-10 right-10 p-2 border border-neutral-200 flex flex-col items-center text-sm gap-2 rounded-full w-max my-4">
        <div class="w-11 h-11 p-1 bg-orange-700 rounded-full gap-2 grid justify-center content-center">
          <svg
            class="w-11 text-neutral-50"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
          </svg>
        </div>

        Temperatura em {city}: <b>{temperature?.celsius}ºC</b>
      </div>
    );
  }

  return (
    <div class="p-1 border border-neutral-200 flex items-center text-sm gap-2 rounded-md w-max my-4">
      <div class="p-1 bg-orange-700 rounded-md gap-2">
        <svg
          class="w-5 text-neutral-50"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        </svg>
      </div>

      Temperatura em {city}: <b>{temperature?.celsius}ºC</b>
    </div>
  );
}
