import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { JSX } from "preact/jsx-runtime";

type Props = {
  Icon: JSX.Element;
  children: ComponentChildren;
  wrapperClasses?: string;
};

export default function LabelWithIcon({
  Icon,
  children,
  wrapperClasses = "flex gap-1 items-center uppercase",
}: Props) {
  return (
    <div className={`${wrapperClasses}`}>
      {Icon}
      {children}
    </div>
  );
}
