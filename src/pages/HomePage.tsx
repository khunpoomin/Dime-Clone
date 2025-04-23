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
        <span className="text-[16px] font-light leading-[1.8] text-[#4D5053]">
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates ea
      tempore illo ipsum odio quo nesciunt, facere ullam blanditiis. Ullam
      doloremque architecto reprehenderit? Consequatur quam omnis consequuntur,
      sapiente necessitatibus facilis fugiat nam nisi earum atque corporis iusto
      saepe suscipit excepturi nobis soluta aspernatur minus? Repellendus iure
      minima voluptates quasi eius pariatur nihil rem, consectetur magni in?
      Doloribus architecto vero officiis accusamus necessitatibus veniam magnam
      enim voluptatem aliquid natus ut commodi, ex cumque id earum obcaecati!
      Aliquam aut est similique qui dolorum sit, id maiores eum debitis animi
      alias totam inventore a assumenda excepturi quisquam? Libero nulla cumque
      placeat reprehenderit enim voluptas sapiente quasi nostrum doloribus modi
      quisquam esse praesentium eius, totam quidem sed eum eligendi nisi
      cupiditate aliquid, a nam natus perspiciatis sint! Beatae commodi
      blanditiis voluptatum non rerum impedit libero fugit laboriosam, soluta
      minima eos, modi ullam magnam corrupti debitis esse repudiandae quod,
      asperiores minus explicabo! Sed nostrum numquam ducimus recusandae
      possimus impedit consectetur quam, alias laudantium nobis officia vero.
      Neque quasi nulla perferendis saepe exercitationem praesentium error
      voluptatibus, quas recusandae qui nemo voluptas, cumque modi asperiores
      veniam laudantium, voluptatum laboriosam ipsa facere? Enim amet hic
      corrupti nobis quaerat ea atque molestias, sed, perspiciatis sint ducimus
      itaque ex adipisci quis cumque provident consequuntur ab aspernatur nam
      deserunt. Nam, illo quidem corrupti temporibus ratione cumque eaque harum,
      sapiente ipsum eos explicabo non quibusdam quos et fuga atque pariatur
      sint? Saepe vitae alias possimus quod aperiam dolores, tempora architecto,
      ratione vero fugiat error quae cumque repellat dignissimos deserunt
      numquam voluptatum! Velit nesciunt accusamus laudantium ipsa tenetur
      asperiores beatae quidem officiis consequuntur numquam vero, tempora
      incidunt quae ipsum illum blanditiis excepturi. Atque veniam deleniti
      magnam optio sint, facilis dolorum sed odio dolores quibusdam officia
      necessitatibus, nesciunt, pariatur rem. Aliquam fugit, voluptatem nostrum
      similique sint quaerat quae facilis ipsa molestiae non soluta voluptatibus
      dolorem, aperiam necessitatibus at animi nisi velit culpa dolore ratione,
      eos debitis dignissimos doloribus reprehenderit. Maxime magnam amet,
      labore mollitia et impedit assumenda nam minima itaque. Aliquam error ut
      quo tempora qui quae illum saepe. Dolores ipsa odio inventore totam
      asperiores quod corporis magni ratione quo, perspiciatis facere,
      voluptatibus veniam dolore iusto. Deserunt voluptate tempore cumque
      placeat reiciendis minus exercitationem aperiam adipisci. Saepe quas ex
      doloremque maxime obcaecati vel totam aliquam laudantium. A nam quod
      labore corrupti corporis, voluptatem recusandae reiciendis debitis
      suscipit harum, excepturi voluptates eos neque quasi officia incidunt nisi
      optio voluptatibus ratione esse! Voluptates debitis velit commodi magnam
      mollitia tenetur consequuntur aliquid! Dicta temporibus nulla animi ipsum
      ratione soluta corporis suscipit optio aspernatur atque. Vero quisquam nam
      consequatur ipsa rerum dolor officia atque perferendis ab qui, assumenda
      ea illo nisi veniam quo vitae earum libero ipsum magnam ullam molestiae
      voluptatibus eaque! Totam sed beatae consequuntur deserunt mollitia
      impedit repellendus saepe enim obcaecati veritatis in ut voluptatem
      recusandae dolorum, temporibus eos assumenda debitis voluptates natus rem
      possimus maxime incidunt. Amet ex beatae, qui in quo magni repudiandae
      quod ratione veritatis deleniti at quisquam, reprehenderit distinctio
      incidunt ullam nulla sapiente? At ipsam, rerum magnam dolorem minima
      veritatis esse fugiat ex, laudantium voluptatum tempore laborum libero id
      expedita animi. Veniam voluptatem dicta doloremque aspernatur! Illo
      nostrum praesentium maiores deserunt, dicta neque quam quos iure illum
      commodi ducimus veniam a voluptatum tempore incidunt culpa alias officia
      natus? Sint perferendis eveniet, voluptatibus suscipit optio nostrum
      similique fuga voluptates numquam veritatis non ab voluptatum. Earum
      deserunt error eos quo excepturi, recusandae sint eius dolorum debitis ut
      fuga quisquam corporis doloribus a, molestiae vero? Illo, autem
      recusandae. Assumenda sed aliquid temporibus esse ut, est accusamus minima
      ipsa optio, fugit alias quam ullam repellendus adipisci impedit culpa
      sint. Doloremque atque vel tempore consectetur vitae, cum sequi similique
      laborum libero enim qui alias, cumque deleniti quis consequuntur unde
      maiores! Molestiae temporibus aliquam voluptate aperiam, blanditiis
      voluptates excepturi nisi itaque praesentium, hic fuga enim tempore
      aliquid cumque. Unde eaque voluptatem velit nihil dolor ad, recusandae
      nemo laudantium eveniet error laboriosam esse voluptas omnis, sit tenetur
      impedit rerum explicabo ea provident dignissimos deleniti. Voluptatum
      voluptatibus error maxime et! Eum, officiis quisquam. Doloremque maxime
      quidem ipsa eos quisquam. Mollitia dolorem velit dolores voluptatibus rem
      illo quasi provident suscipit in enim optio ad possimus nulla expedita
      distinctio, praesentium officiis! Non similique iure reiciendis, sit
      voluptates facere ad in aperiam consequatur adipisci aut et. Quidem
      doloribus recusandae eligendi ipsum fugiat, ipsa nostrum ea labore
      perspiciatis commodi deleniti vero, nemo porro dolore optio expedita
      deserunt distinctio, inventore tenetur facilis doloremque! Reiciendis
      consequatur, magnam quod blanditiis officiis, expedita quidem aliquid
      dolorum quo temporibus, earum quasi! Velit veritatis corporis itaque dolor
      voluptatibus recusandae quia, mollitia rem dolore voluptates ipsam
      quibusdam totam illum laboriosam ut eius esse numquam deleniti officia
      odit minima dicta. Excepturi enim eveniet et ea aliquid earum distinctio
      id dolorum saepe! Consequatur voluptate fuga consectetur architecto iste,
      dolor minima, laboriosam repellendus iure itaque labore cum. Consectetur
      maiores asperiores officia tempora minima ad perferendis, fugiat quia
      adipisci veritatis accusamus dolorum optio enim mollitia et nam deserunt
      repellendus amet quod. Itaque expedita nesciunt delectus doloremque ipsum
      assumenda eligendi architecto. Voluptas delectus quibusdam debitis porro,
      molestias quas dolores aut provident ipsa, id, explicabo eum dignissimos
      rem incidunt aspernatur inventore ab exercitationem harum optio pariatur.
      Exercitationem natus eum vel, repellendus ipsa corrupti minus. Ullam ipsum
      ipsa expedita velit numquam! Eos facilis aliquid unde est magni laborum
      mollitia excepturi dignissimos eligendi ratione, porro architecto
      asperiores tenetur? Quam, magni! Ea iure nemo ratione doloribus omnis
      tempore, aliquam, rerum in vitae exercitationem molestiae adipisci magnam!
      Necessitatibus sit accusamus ea assumenda ipsam, error blanditiis quia
      beatae et impedit esse totam ullam aliquid nesciunt adipisci magnam eius
      iusto doloremque quod voluptatem suscipit provident, distinctio atque
      quis. Aspernatur culpa dolore tenetur, consequatur ea rem necessitatibus!
      Sequi autem odit quibusdam incidunt sit ipsum vero, excepturi adipisci,
      aut aspernatur fugit accusamus! Aut vero, molestiae fuga nobis dolor vitae
      qui nesciunt aliquam asperiores illo in officiis vel repellendus cum
      aspernatur eius voluptates dolorum neque animi natus exercitationem
      assumenda deserunt! Quia, debitis ratione animi doloremque accusantium
      soluta cupiditate dolores eum quam vel dolor perspiciatis repellendus,
      iure maxime voluptatem in, facilis quae ducimus cum porro exercitationem!
    </div>
  );
}
