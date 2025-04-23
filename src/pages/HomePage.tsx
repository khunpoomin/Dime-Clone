//Image
import BannerAppStore from "/banner-app-store.webp";
import BannerPlayStore from "/banner-play-store.webp";
import HomeBgXl from "/home-bg-xl.webp";
import HomeTopHeroLg from "/home-top-hero-lg.webp";
import HomeSavingProduct from "/home-saving-product.webp";
import HomeDimeSave from "/home-dime-save.webp";
import HomeDimeFCD from "/home-dime-fcd.webp";
//Component
import HightLightText from "../components/typograpy/HightLightText";
//Router
import { Link } from "react-router-dom";
//Icons
import { Icon } from "@iconify/react";
import CardStock from "../components/cards/CardStock";

type DetailLinkProps = {
  index: number;
  label: string;
  detail: string;
  icon: string;
  path: string;
};

const DetailLinkOption = [
  {
    label: "เงินฝากออมทรัพย์ Dime! Save",
    detail:
      "ออมเงินกับบัญชีเงินฝากออมทรัพย์ Dime! Save ฝากง่าย จ่ายคล่อง รับดอกเบี้ยสูงสุด 3% ต่อปี จากธนาคารเกียรตินาคินภัทร",
    icon: HomeDimeSave,
    path: "/save/dime-save",
  },
  {
    label: "เงินฝากเงินตราต่างประเทศ Dime! FCD",
    detail:
      "บัญชีเงินฝากเงินตราต่างประเทศดอกเบี้ยสูงสุดถึง 5% ต่อปี จากธนาคารเกียรตินาคินภัทร ออมได้ตามใจ เท่าไรก็ได้ ไม่มีขั้นต่ำ",
    icon: HomeDimeFCD,
    path: "/save/dime-fcd",
  },
];

const Color = ["#00CA45", "#85D100"];

const DetailLink = ({ label, detail, icon, path, index }: DetailLinkProps) => {
  return (
    <div>
      <span className="flex gap-2">
        <img src={icon} alt="home-dime-save" className="w-[38px]" />
        <h1 className={`text-[24px]`} style={{ color: Color[index] }}>
          {label}
        </h1>
      </span>
      <div className="flex flex-col pl-12 gap-5">
        <p className="text-[18px] font-light leading-[1.8] text-[#4D5053]">
          {detail}
        </p>
        <span className=" w-fit text-[16px] font-light leading-[1.8] text-[#4D5053]">
          <Link to={path} className=" underline flex items-center gap-2 ">
            <p>อ่านเพิ่มเติม</p>
            <Icon icon="iconamoon:arrow-right-2-light" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div>
      <div className=" relative top-0 left-0 h-[450px] -z-10">
        <img
          src={HomeBgXl}
          alt="home-bg-xl"
          className=" absolute h-full object-cover"
        />
        <div
          className=" h-full absolute left-[28.5%] flex flex-col items-start justify-center text-[#5DF591] text-[64px] leading-[1.2]"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="flex">
            <p>เปิดบัญชี</p>
            <p className="text-white">ง่าย</p>
          </span>
          <span className="flex">
            <p>ออมเงิน</p>
            <p className="text-white">ได้</p>
          </span>
          <span className="flex">
            <p>ลงทุน</p>
            <p className="text-white">ดี</p>
          </span>
        </div>
        <img
          src={HomeTopHeroLg}
          alt="home-top-hero-lg"
          className=" absolute top-[-75px] right-0"
          data-aos="fade-up"
          data-aos-duration="2000"
        />
      </div>
      <div className="w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-[3rem] text-[42px] mt-20 overflow-hidden">
          <span
            className="flex gap-5 items-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="150"
            data-aos-once="true"
          >
            <HightLightText>เปิดบัญชีง่าย</HightLightText>

            <p>เทรด ออม จ่าย ในแอปเดียว</p>
          </span>
          <p
            className="text-[24px] max-w-[500px] text-center leading-[1.5]"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="150"
            data-aos-once="true"
            data-aos-delay="50"
          >
            ไม่ต้องไปธนาคาร ไม่ต้องส่งเอกสาร ไม่มีขั้นต่ำ อนุมัติไวภายใน 2 นาที
            เปิดบัญชีวันนี้ เทรด ออม จ่าย ได้ทันที
          </p>
          <p
            className="text-[18px]  text-[#4D5053] font-light"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-delay="100"
          >
            ดาวน์โหลดแอปพลิเคชัน Dime! จาก App Store หรือ Play Store
            แล้วเปิดบัญชีลงทุนได้เลย
          </p>
          <div
            className="flex gap-10"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-delay="100"
          >
            <img src={BannerAppStore} alt="banner-app-store" />
            <img src={BannerPlayStore} alt="banner-play-store" />
          </div>
        </div>
        <div className="flex justify-center gap-10 py-32">
          <img
            src={HomeSavingProduct}
            alt="home-saving-product"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-once="true"
            className="w-[512px]"
          />
          <div className="flex flex-col w-[30rem] gap-10">
            <div>
              <HightLightText>ออมเงิน</HightLightText>
              <p className="font-light leading-[2] text-[#4D5053]">
                ต่อยอดเงินออมให้งอกเงย
                ด้วยบัญชีเงินฝากออมทรัพย์ที่ฝากเป็นบาทหรือดอลลาร์ก็รับดอกเบี้ยสูง
              </p>
            </div>
            {DetailLinkOption.map(({ label, detail, icon, path }, index) => {
              return (
                <DetailLink
                  key={index}
                  index={index}
                  label={label}
                  detail={detail}
                  icon={icon}
                  path={path}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-10 px-60 py-40 bg-[#F5F5F5]">
        <div className="flex flex-col items-start justify-center max-w-[320px] h-[420px]">
          <HightLightText>ลงทุน</HightLightText>
          <p>
            ครบทุกสินทรัพย์ให้ลงทุน หุ้นสหรัฐอเมริกา หุ้นไทย กองทุนรวม ทองคำ
            และหุ้นกู้ เพิ่มโอกาสรับผลตอบแทนง่าย แค่ปลายนิ้ว
          </p>
        </div>
        <CardStock />
      </div>
    </div>
  );
}
