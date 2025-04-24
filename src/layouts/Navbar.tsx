import DropdownComponent from "../components/DropdownComponent";
import DimeLogo from "/dime-icon-light.svg";
import { AppPath } from "../utils/routes/AppPath";
export default function Navbar() {
  return (
    <div className=" sticky top-0 flex justify-between py-4 pl-[68px] pr-[80px] bg-white z-20 shadow-lg">
      <img src={DimeLogo} alt="dime-icon-light" className="h-[32px]" />
      <DropdownComponent path={AppPath} />
      <p>ไทย</p>
    </div>
  );
}
