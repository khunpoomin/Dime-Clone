import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { tv } from "tailwind-variants";

type DropdownComponentProps = {
  path: {
    pathname: string;
    name: string;
    list: {
      pathname: string;
      name: string;
    }[];
  }[];
};

const linkLabel = tv({
  slots: {
    base: " text-[16px] text-[#1D1C2D] font-[530]",
    wrapper: "flex gap-4",
    wrapLink: "relative group",
    wrapLabel: "flex gap-2 px-2",
    active:
      "absolute w-fit top-full left-0 hidden group-hover:block bg-white shadow-md rounded-md p-2 z-10",
    icon: " group-hover:rotate-180 group-hover:transition group-hover:duration-[500ms]",
  },
});

export default function DropdownComponent({ path }: DropdownComponentProps) {
  const { base, wrapper, wrapLink, wrapLabel, icon, active } = linkLabel();
  return (
    <div className={wrapper()}>
      {path.map(({ pathname, name, list }, index) => (
        <div key={index} className={wrapLink()}>
          <div className={wrapLabel()}>
            <span className="relative group">
              <span className="absolute group-hover:-inset-x-2 bottom-0 h-[11px] group-hover:bg-[#5DF591]"></span>
              <Link
                to={pathname}
                onClick={(e) => {
                  ["/save", "/invest"].includes(pathname) && e.preventDefault();
                }}
                className={base()}
              >
                <p className="relative z-10">{name}</p>
              </Link>
            </span>
            {list.length > 0 && (
              <Icon
                icon="iconamoon:arrow-down-2-light"
                width="24"
                height="24"
                className={icon()}
              />
            )}
          </div>
          {list.length > 0 && (
            <div className={active()}>
              {list.map(({ pathname, name }, subIndex) => (
                <Link key={subIndex} to={pathname} className={base()}>
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
