//Stock-us
import HomeInvestmentUsStockBg from "/home-investment-us-stock-bg.webp";
import HomeInvestmentUsStock from "/home-investment-us-stock.webp";
import HomeInvestmentUsStockIcon from "/home-investment-us-stock-icon.webp";
//Gold
import HomeInvestmentGoldBg from "/home-investment-gold-bg.webp";
import HomeInvestmentGold from "/home-investment-gold.webp";
import HomeInvestmentGoldIcon from "/home-investment-gold-icon.webp";
//Staock-th
import HomeInvestmentThStockBg from "/home-investment-th-stock-bg.webp";
import HomeInvestmentThStock from "/home-investment-th-stock.webp";
import HomeInvestmentThStockIcon from "/home-investment-th-stock-icon.webp";
//Bond
import HomeInvestmentBondBg from "/home-investment-bond-bg.webp";
import HomeInvestmentBond from "/home-investment-bond.webp";
import HomeInvestmentBondIcon from "/home-investment-bond-icon.webp";
//Fund
import HomeInvestmentFundBg from "/home-investment-fund-bg.webp";
import HomeInvestmentFund from "/home-investment-fund.webp";
import HomeInvestmentFundIcon from "/home-investment-fund-icon.webp";
//Icons
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const DetailLinkOption = [
  {
    label: "หุ้นสหรัฐอเมริกา",
    detail:
      "ลงทุนในหุ้นสหรัฐอเมริกา เริ่มต้นที่ 50 บาท ฟรีค่าคอมมิชชันสำหรับรายการซื้อขายแรกของเดือน ไม่เสียค่าธรรมเนียมแลกเงินหรือโอนเงิน",
    icon: HomeInvestmentUsStockIcon,
    bg: HomeInvestmentUsStockBg,
    image: HomeInvestmentUsStock,
    path: "/invest/stock-us",
  },
  {
    label: "ทองคำ",
    detail:
      "ซื้อ ขาย ออมทองคำมาตรฐานโลก กับร้านทองชื่อดัง พร้อมเทรดฟรี ไม่มีค่าธรรมเนียม เริ่มต้นเพียง 100 บาท",
    icon: HomeInvestmentGoldIcon,
    bg: HomeInvestmentGoldBg,
    image: HomeInvestmentGold,
    path: "/invest/gold",
  },
  {
    label: "หุ้นไทย",
    detail:
      "ลงทุนหุ้นไทยบน Dime! ง่าย ๆ มือใหม่หรือมือโปรก็ลงทุนได้ เทรดฟรีไม่มีค่าคอมเดือนละครั้ง จัดการเงินลงทุนสะดวก ไร้รอยต่อ",
    icon: HomeInvestmentThStockIcon,
    bg: HomeInvestmentThStockBg,
    image: HomeInvestmentThStock,
    path: "/invest/stock-th",
  },
  {
    label: "หุ้นกู้",
    detail:
      "จองซื้อหุ้นกู้ได้ง่าย ๆ ผ่านแอปพลิเคชัน Dime! หุ้นกู้คุณภาพดีคัดสรรและจัดจำหน่ายโดยบริษัทหลักทรัพย์ เกียรตินาคินภัทร",
    icon: HomeInvestmentBondIcon,
    bg: HomeInvestmentBondBg,
    image: HomeInvestmentBond,
    path: "/invest/bond",
  },
  {
    label: "กองทุนรวม",
    detail:
      "ลงทุนในกองทุนรวมได้มากกว่า 1,700 กองทุน จาก 20 บลจ. ตอบโจทย์ทุกเป้าหมายการลงทุน",
    icon: HomeInvestmentFundIcon,
    bg: HomeInvestmentFundBg,
    image: HomeInvestmentFund,
    path: "/invest/fund",
  },
];

const Color = ["#6542DC", "#CD9F36", "#AD2AFF", "#24CEBD", "#428CFA"];
export default function CardStock() {
  return (
    <>
      {DetailLinkOption.map(
        ({ label, detail, icon, bg, image, path }, index) => (
          <div
            key={index}
            className=" rounded-2xl shadow-2xl overflow-hidden max-w-[320px] h-fit"
          >
            <div
              className={` relative bg-contain bg-center bg-no-repeat w-full h-[400px] flex flex-col px-6 py-10 gap-4`}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <img
                src={icon}
                alt="home-investment-us-stock-icon"
                className=" w-10"
              />
              <h1 className=" text-[28px]" style={{ color: Color[index] }}>
                {label}
              </h1>
              <p className="font-light leading-[1.5] text-[#4D5053]">
                {detail}
              </p>
              <img
                src={image}
                alt="home-investment-us-stock"
                className=" absolute bottom-0 right-0 w-64"
              />
              <Link
                to={path}
                className="flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-[#E1E1E1]"
              >
                <Icon icon="iconamoon:arrow-right-2-light" color="#4D5053" />
              </Link>
            </div>
            <div
              className=" w-full h-5"
              style={{ backgroundColor: Color[index] }}
            ></div>
          </div>
        )
      )}
    </>
  );
}
