import { ReactNode } from "react";

type HeightLightText = {
  children: ReactNode;
  fontSize?: string | number;
  color?: ColorGamut;
};
export default function HightLightText({
  children,
  fontSize,
  color,
}: HeightLightText) {
  return (
    <div className={`relative text-[${fontSize || 42}px] w-fit`}>
      <span
        className={`absolute -inset-x-1 bottom-3 h-4 bg-[${
          color || "#5DF591"
        }]`}
      ></span>
      <p className="relative z-10">{children}</p>
    </div>
  );
}
