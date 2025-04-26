//Image
import BannerAppStore from "/banner-app-store.webp";
import BannerPlayStore from "/banner-play-store.webp";
import HomeBannerBgXl from "/home-banner-bg-xl.webp";
import HomeBgXl from "/home-bg-xl.webp";
import HomeDimeFCD from "/home-dime-fcd.webp";
import HomeDimeSave from "/home-dime-save.webp";
import HomeFeatureLeftIcon from "/home-feature-left-icon.webp";
import HomeFeatureRightIcon from "/home-feature-right-icon.webp";
import HomeSavingProduct from "/home-saving-product.webp";
import HomeTopHeroLg from "/home-top-hero-lg.webp";
import HomeArticleIcon from "/home-article-icon.webp";
import HomeStockIcon from "/home-stock-icon.webp";
import HomeFundIcon from "/home-fund-icon.webp";
import HomeDictIcon from "/home-dict-icon.webp";
import HomeManage from "/home-manage.gif";
import KkpLogo from "/kkp-logo.webp";
import DimeLogo from "/dime-logo.webp";
//Component
import HightLightText from "../components/typograpy/HightLightText";
//Router
import { Link } from "react-router-dom";
//Icons
import { Icon } from "@iconify/react";
import CardStock from "../components/cards/CardStock";
import { ReactNode } from "react";

type DetailLinkProps = {
  index: number;
  label: string;
  detail: string;
  icon: string;
  path: string;
};

type DetailArticleProps = {
  label: string;
  detail: string | ReactNode;
  icon: string;
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

const BannerOption = [
  {
    label: "ออมเงิน",
    detail:
      "เงินฝากตามใจ ไม่มีขั้นต่ำ ไม่ต้องฝากประจำ ฝากสะดวกทั้งสกุลบาทและสกุลดอลลาร์",
  },
  {
    label: "ลงทุน",
    detail:
      "ครบทุกสินทรัพย์ หลากหลายตัวเลือกการลงทุน สร้างโอกาสรับผลตอบแทนง่าย แค่ปลายนิ้ว",
  },
  {
    label: "เรียนรู้",
    detail:
      "ทันทุกข่าวสารการเงินการลงทุน พร้อมความรู้ธุรกิจที่คุณไม่ควรพลาด กับคอนเทนต์มากมายที่ Dime! จัดให้คุณ",
  },
  {
    label: "จัดการ",
    detail: "บริหารเงิน วางแผนการลงทุน ด้วยเครื่องมือสุดล้ำบนแอปพลิเคชัน Dime!",
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

const DetailArticle = ({ label, detail, icon }: DetailArticleProps) => {
  return (
    <div className=" relative flex flex-col bg-white rounded-2xl text-start w-[26rem] shadow-xl px-13 py-12 gap-3">
      <img
        src={icon}
        alt="home-feature-right-icon"
        className=" absolute -top-12 right-5 w-24"
      />
      <h1 className="text-[24px] font-bold">{label}</h1>
      <p className="text-[18px] font-light">{detail}</p>
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
          >
            <HightLightText>เปิดบัญชีง่าย</HightLightText>

            <p>เทรด ออม จ่าย ในแอปเดียว</p>
          </span>
          <p
            className="text-[24px] max-w-[500px] text-center leading-[1.5]"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="50"
          >
            ไม่ต้องไปธนาคาร ไม่ต้องส่งเอกสาร ไม่มีขั้นต่ำ อนุมัติไวภายใน 2 นาที
            เปิดบัญชีวันนี้ เทรด ออม จ่าย ได้ทันที
          </p>
          <p
            className="text-[18px]  text-[#4D5053] font-light"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            ดาวน์โหลดแอปพลิเคชัน Dime! จาก App Store หรือ Play Store
            แล้วเปิดบัญชีลงทุนได้เลย
          </p>
          <div
            className="flex gap-10"
            data-aos="fade-up"
            data-aos-duration="500"
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
            data-aos-duration="1500"
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
        <div className="flex flex-col items-start justify-center max-w-[320px] h-[420px] gap-5">
          <HightLightText>ลงทุน</HightLightText>
          <p className="font-light leading-[1.5] ">
            ครบทุกสินทรัพย์ให้ลงทุน หุ้นสหรัฐอเมริกา หุ้นไทย กองทุนรวม ทองคำ
            และหุ้นกู้ เพิ่มโอกาสรับผลตอบแทนง่าย แค่ปลายนิ้ว
          </p>
        </div>
        <CardStock />
      </div>
      <div
        className="flex flex-col items-center py-24 bg-no-repeat bg-center gap-20"
        style={{ backgroundImage: `url(${HomeBannerBgXl})` }}
      >
        <div className="max-w-[20rem] text-center">
          <p className="text-white font-light text-[18px] leading-[1.6]">
            <span className="text-[#5DF591] font-[550] mr-2">
              แอปพลิเคชัน Dime!
            </span>
            ได้รวบรวมผลิตภัณฑ์ บริการ ความรู้ ข้อมูล
            และเครื่องมือการเงินการลงทุนไว้ครบ จบในที่เดียว
            ให้ทุกคนเข้าถึงได้ง่าย เสียค่าใช้จ่ายน้อยที่สุด
            และตอบโจทย์ไลฟ์สไตล์ในยุคดิจิทัล
          </p>
        </div>
        <div className=" relative bg-white rounded-4xl px-20 py-10">
          <img
            src={HomeFeatureLeftIcon}
            alt="home-feature-left-icon"
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" absolute -bottom-20 -left-20"
          />
          {BannerOption.map(({ label, detail }, index) => (
            <div key={index} className="flex items-center gap-10">
              <div className="flex justify-end min-w-[10rem] ">
                <span className="flex items-center gap-1 ">
                  <p className="text-[42px] pb-4">{label}</p>
                  <span className="w-2 h-2 rounded-full bg-[#5DF591]"></span>
                </span>
              </div>
              <div className="flex max-w-[30rem]">
                <p className="font-light text-[#4D5053] ">{detail}</p>
              </div>
            </div>
          ))}
          <img
            src={HomeFeatureRightIcon}
            alt="home-feature-right-icon"
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" absolute -top-20 -right-20"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-10 py-20">
        <div className="flex text-[42px] gap-2">
          <p>การลงทุนในความรู้</p>
          <HightLightText>ให้กำไรดีที่สุด</HightLightText>
        </div>
        <div className="w-[42rem] text-[18px] font-light text-[#4D5053]">
          <p>
            จุดเริ่มต้นของการบริหารการเงินการลงทุนที่ดี คือ
            ความรู้ทางการเงินการลงทุนที่ครบถ้วนถูกต้องและทันสมัย Dime!
            จึงให้ความสำคัญกับการสร้างและเผยแพร่ความรู้และข้อมูลการเงินการลงทุนให้กับลูกค้าทุกคน
            ผ่านฟีเจอร์ต่าง ๆ ของแอปพลิเคชัน Dime!
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex gap-5 mt-14"
        >
          <div className="flex flex-col gap-5">
            <DetailArticle
              label="บทความ"
              detail="เสริมความรู้การเงิน การลงทุน เศรษฐกิจ และ 
              ธุรกิจให้แข็งแกร่งด้วยคอนเทนต์ดี ๆ ที่ Dime!
              คัดสรรมาให้เหมาะกับความเป็นคุณมากที่สุด"
              icon={HomeArticleIcon}
            />
            <DetailArticle
              label="ข้อมูลหลักทรัพย์"
              detail="จะหุ้นไทย หุ้นนอก หรือกองทุนรวม ก็ค้นหาง่าย
               ด้วยข้อมูลการเงินแบบจัดเต็มที่อัปเดตเรียลไทม์
              ให้คุณใช้วิเคราะห์ตัดสินใจลงทุนได้สะดวกยิ่งขึ้น"
              icon={HomeStockIcon}
            />
          </div>
          <div className="flex flex-col gap-5 mt-15">
            <DetailArticle
              label="พอร์ตคนดังระดับโลก"
              detail="รวมทุกการลงทุนที่เป็นกระแส ดี เด่น ดัง
              มาเสิร์ฟให้ถึงมือคุณ พร้อมแกะพอร์ตนักลงทุนชื่อดัง
              ให้คุณได้ติดตามอย่างใกล้ชิด"
              icon={HomeFundIcon}
            />
            <DetailArticle
              label="Dime! Dictionary"
              detail={
                <p className="leading-[1.8]">
                  เจอคำศัพท์การลงทุนยาก ๆ บนแอปพลิเคชัน Dime! ไม่ต้องกังวลใจไป
                  เพียงกดปุ่ม
                  <span className="inline-flex mx-1 mb-1 align-middle">
                    <Icon
                      icon="material-symbols:info-outline"
                      width="22"
                      height="22"
                      className="text-[#888]"
                    />
                  </span>
                  ก็จะได้เห็นคำอธิบายโดยละเอียดของคำศัพท์แต่ละคำ
                  ให้คุณลงทุนได้อย่างมั่นใจในทุกขั้นตอนเหมือนมีครูสอนอยู่ข้าง ๆ
                </p>
              }
              icon={HomeDictIcon}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-14 h-fit w-[1024px] mx-auto rounded-4xl px-20 py-0 my-10 bg-[#111111]">
        <img
          src={HomeManage}
          alt="home-manage"
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-96"
        />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col gap-10 text-start"
        >
          <h1 className="text-[42px] text-white leading-[1.2]">
            มากกว่าการลงทุน คือ
            <span className=" text-[#5DF591] ml-2">การจัดการการลงทุน</span>
          </h1>
          <p className="text-[18px] text-white font-light leading-[1.8]">
            <span>แอปพลิเคชัน Dime!</span>
            ช่วยให้คุณบริหารจัดการชีวิตการเงินการลงทุนของคุณได้ง่ายขึ้น
            ด้วยฟีเจอร์เครื่องมือสุดล้ำไม่เหมือนใคร
            อย่างเครื่องมือบันทึกสินทรัพย์ Asset Tracker
            หรือลองทำแบบทดสอบเพื่อค้นหาตัวละคร Dime! ของคุณ
            รับคำแนะนำการลงทุนเพื่อคุณโดยเฉพาะ
          </p>
          <Link
            to="/manage"
            className="flex items-center justify-center h-14 w-[200px] rounded-xl bg-[#5DF591] transition hover:bg-[#5DF59199]"
          >
            ดูเพิ่มเติม
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col justify-center items-center texy-center gap-15 my-20"
      >
        <div className="flex gap-2 text-[42px] items-center">
          <HightLightText>ปลอดภัย</HightLightText>
          <h1>ไร้กังวล</h1>
        </div>
        <p className="text-[18px] font-light text-[#4D5053] text-center max-w-[800px] leading-[1.8]">
          บริษัทหลักทรัพย์ เคเคพี ไดม์ (KKP Dime) ผู้ให้บริการแอปพลิเคชัน Dime!
          ได้รับใบอนุญาตประกอบธุรกิจหลักทรัพย์จากสำนักงาน ก.ล.ต. บัญชีออมทรัพย์
          Dime! Save ให้บริการโดยธนาคารเกียรตินาคินภัทร ได้รับความคุ้มครองภายใต้
          พ.ร.บ. สถาบันคุ้มครองเงินฝากในวงเงิน 1 ล้านบาท ต่อ 1 รายผู้ฝากเงิน ต่อ
          1 สถาบันการเงิน
          หลักทรัพย์และเงินลงทุนสกุลดอลลาร์สหรัฐมีผู้รับฝากทรัพย์สิน (Custodian
          Bank) ช่วยดูแลและเก็บรักษา และได้รับการคุ้มครองโดย SIPC
          องค์กรไม่แสวงหาผลกำไรของสหรัฐอเมริกาซึ่งมีหน้าที่คุ้มครองหลักทรัพย์และเงินลงทุนของผู้ลงทุนในบริษัทหลักทรัพย์ที่เป็นสมาชิกของ
          SIPC วงเงินสูงสุด 500,000 ดอลลาร์สหรัฐต่อนักลงทุนหนึ่งราย
        </p>
        <div className="flex justify-center gap-20 w-full">
          <img src={KkpLogo} alt="kkp-logo" />
          <img src={DimeLogo} alt="dime-logo" />
        </div>
      </div>
    </div>
  );
}
