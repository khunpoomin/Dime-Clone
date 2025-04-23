import { ReactNode } from "react";

type HeightLightText = {
  children: ReactNode;
  fontSize?: string | number;
};
export default function HightLightText({
  children,
  fontSize,
}: HeightLightText) {
  return (
    <div className={`relative text-[${fontSize || 42}px] w-fit`}>
      <span className="absolute -inset-x-1 bottom-3 h-4 bg-[#5DF591]"></span>
      <p className="relative z-10">{children}</p>
    </div>
  );
}
