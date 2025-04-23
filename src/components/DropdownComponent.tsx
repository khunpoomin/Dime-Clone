import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { tv } from "tailwind-variants";
import { useState } from "react";

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
    base: "text-[16px] font-[500]",
    wrapper: "flex gap-4",
    wrapLink: "relative group",
    wrapLabel: "flex gap-2 px-2",
    dropdown:
      "absolute min-w-[15rem] top-full left-0 hidden group-hover:flex group-hover:flex-col bg-white shadow-xl rounded-xl p-5",
    icon: "group-hover:rotate-180 group-hover:transition group-hover:duration-[500ms]",
    highlight: "absolute -inset-x-2 bottom-0 h-[11px] bg-[#5DF591]",
    hoverHighlight:
      "absolute duration-500 group-hover:-inset-x-2 bottom-0 h-[11px] group-hover:bg-[#5DF591]",
    mainList: "relative z-10 select-none",
    subList: "text-[14px] select-none py-2",
  },
});

export default function DropdownComponent({ path }: DropdownComponentProps) {
  const {
    base,
    wrapper,
    wrapLink,
    wrapLabel,
    dropdown,
    icon,
    highlight,
    hoverHighlight,
    mainList,
    subList,
  } = linkLabel();

  const [activePath, setActivePath] = useState<string | null>(null);

  const togglePath = (pathname: string) => {
    setActivePath((prev) => (prev === pathname ? null : pathname));
  };

  return (
    <div className={wrapper()}>
      {path.map(({ pathname, name, list }, index) => (
        <div key={index} className={wrapLink()}>
          <div className={wrapLabel()}>
            <span
              className="relative group"
              onClick={() => togglePath(pathname)}
            >
              {activePath === pathname && <span className={highlight()} />}
              <span className={hoverHighlight()} />
              <Link
                to={pathname}
                onClick={(e) => {
                  if (["/save", "/invest"].includes(pathname))
                    e.preventDefault();
                }}
                className={base()}
              >
                <p className={mainList()}>{name}</p>
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
            <div className={dropdown()}>
              {list.map(({ pathname, name }, subIndex) => (
                <span key={subIndex}>
                  <Link to={pathname} className={base()}>
                    <span className="relative group/subList">
                      {activePath === pathname && (
                        <span className=" absolute -left-5 w-1 h-full bg-[#5DF591] "></span>
                      )}
                      <span className=" absolute  -left-5 w-[5px] h-full rounded-full bg-[#5DF591] hidden group-hover/subList:block"></span>
                      <p className={subList()}>{name}</p>
                    </span>
                  </Link>
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
