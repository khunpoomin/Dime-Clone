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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellat
      aspernatur dolor facere corporis vel sunt qui sequi. Optio vitae
      temporibus esse ducimus, doloribus accusantium! Natus exercitationem
      adipisci temporibus obcaecati amet illum! Itaque nulla, voluptatum
      voluptates illo excepturi explicabo esse ad architecto iste nostrum
      incidunt expedita sequi debitis, quibusdam odit ipsum earum a eius,
      repudiandae enim dignissimos eveniet. Vel quisquam, mollitia
      exercitationem possimus deleniti alias debitis quo facere est dignissimos
      natus doloremque quaerat, odit nostrum ducimus inventore unde! Rem amet
      quisquam molestiae? Quo illum corrupti dolor adipisci blanditiis. At ex
      rem voluptatem culpa aut commodi suscipit soluta, molestiae deserunt
      reiciendis laboriosam iste. Eaque quod fugit cupiditate dolorem voluptatem
      enim harum, maiores distinctio, libero omnis corrupti dolorum esse
      similique quam corporis perferendis nam officiis ipsa doloribus pariatur!
      Possimus assumenda corporis, rem, maxime iste dolores accusantium non
      eveniet aperiam distinctio tenetur officia iusto eum minus mollitia ea
      molestiae iure molestias cupiditate voluptates. Aut animi, amet suscipit
      doloremque quasi, sit ab architecto dolor sunt eveniet voluptas qui
      possimus velit sint aliquam repellat sed nobis! Autem tempore repellendus,
      voluptate unde natus impedit. Reiciendis error explicabo autem fuga.
      Consequuntur, voluptatibus ea. Nihil ipsam quasi voluptas accusamus modi
      itaque error quibusdam mollitia hic blanditiis. Animi corporis quo veniam
      tempora doloremque consequuntur, voluptate rerum. A quae odio tenetur
      perferendis consequuntur unde, soluta voluptatum pariatur blanditiis et
      voluptatem, quod accusamus est harum. Ad minus molestiae iusto harum
      placeat earum est odit mollitia amet quaerat aliquid nemo hic blanditiis
      tempora quia alias sed odio distinctio, itaque culpa rem. Quidem dolorem
      quis veniam cumque. Facilis expedita explicabo iusto assumenda! Est eum
      impedit, quaerat quos quae recusandae, velit laudantium eaque nisi iste
      dolor voluptas? Voluptatibus harum tenetur corporis optio praesentium
      nesciunt velit dolorum repellat corrupti cupiditate id quae dolor ipsa,
      alias facere nemo repellendus dolores ut aliquam dignissimos recusandae
      minus. Sapiente, recusandae? Ullam aliquid facere assumenda, natus eaque
      qui ducimus ratione in quae asperiores cumque perferendis repudiandae
      soluta eos at libero voluptates ipsa veniam sunt odio harum minima. Beatae
      unde, repudiandae esse nam obcaecati quis quibusdam, facere fuga
      consequatur non quisquam amet aliquam consectetur, expedita ratione? Ab,
      nesciunt velit a magni dolorem numquam quasi illo aspernatur labore veniam
      possimus mollitia sapiente fugiat ex explicabo libero hic magnam obcaecati
      optio, temporibus iste. Tenetur ratione sequi laudantium veritatis odit
      rem. Rem veritatis vitae porro minima. Facere dolor optio atque at
      praesentium quos sapiente repudiandae libero? Earum rerum sit consequuntur
      voluptas quos enim ullam, adipisci pariatur illum cum laborum culpa omnis
      voluptatibus nobis perspiciatis temporibus nihil id nam illo placeat
      libero? Animi voluptates dicta natus asperiores doloribus veniam magnam
      modi cum expedita velit, dignissimos temporibus sunt necessitatibus
      aperiam molestiae consequatur corporis molestias iste cupiditate maxime
      quas. Facere suscipit laborum doloremque at neque. Repellendus minus
      expedita quo. Ab nisi cumque enim repudiandae excepturi deserunt incidunt,
      odit totam tenetur tempore soluta maiores debitis culpa inventore veniam
      autem error obcaecati quae. Eligendi laudantium sint fugit beatae. Ex
      praesentium tempora consectetur dolores blanditiis nam labore quasi
      cupiditate quidem, veritatis eos recusandae perferendis libero
      reprehenderit ipsa et dolorem! Dolore minus quo quisquam, cupiditate
      sapiente voluptatum officia impedit ipsa? Aperiam nostrum, harum hic
      deserunt laborum architecto ea sit a id dolor dignissimos sed quae,
      accusantium voluptas autem quod. Earum magni neque, eveniet debitis enim
      dolorem aliquam necessitatibus suscipit aliquid veritatis eius atque velit
      eum cum recusandae animi, vero fugiat maxime quidem. Nihil, dolore. Quod
      quidem dolorum fuga delectus repudiandae ad deserunt, voluptates eos nulla
      id. Dignissimos neque omnis expedita dicta iure sapiente consequuntur
      eaque! Quaerat adipisci numquam dolores ipsum sit eaque ipsa voluptas
      provident ducimus sapiente! Minus nemo reiciendis suscipit, error unde
      praesentium enim sint ut nostrum ab quas ipsum dolore explicabo sunt
      nesciunt iure recusandae quae voluptatem. Labore laborum repellat commodi,
      quod ipsa mollitia perferendis autem nesciunt asperiores placeat maiores
      eum neque quo rem fugit sed optio, praesentium atque voluptatibus
      molestias eaque amet id nisi? Quae tenetur dicta fuga iste, officiis,
      vitae architecto commodi labore modi vel quasi distinctio quis cumque
      porro doloremque error delectus expedita incidunt quam, voluptatum fugit!
      Hic quidem voluptate dolore, accusamus ea ratione atque! Consequuntur et
      tempore, nam accusantium dolorem culpa veritatis perspiciatis maxime
      corporis cumque voluptatum nisi commodi dolor cum consectetur obcaecati at
      vero ea sit eius. Doloremque ut odio labore deleniti voluptate, tempore
      quaerat ipsam. Laboriosam velit sint pariatur nostrum vero recusandae,
      ducimus laborum repellendus, ex explicabo inventore accusamus similique!
      Iusto repudiandae sequi cumque, est suscipit incidunt? Ducimus impedit
      esse nam quaerat nulla accusantium, harum culpa fugit, sit totam pariatur
      error doloribus enim numquam porro eius cumque illum eligendi iste hic?
      Inventore blanditiis distinctio aut praesentium illum delectus soluta
      dolorum voluptates repellendus laborum dolores cum perspiciatis veritatis
      aliquid, ipsum fugiat eum atque nostrum placeat quis nulla perferendis
      repellat odio! In, doloribus distinctio eligendi asperiores sit nemo
      aspernatur accusamus itaque nesciunt quas vel suscipit atque nam quasi
      beatae commodi quam qui expedita quis deleniti nulla eveniet, voluptate
      veritatis magnam. Provident expedita culpa officia temporibus nisi sequi
      dicta tenetur deleniti magnam perferendis cumque quidem fugit qui modi sed
      assumenda, illum quibusdam nihil veritatis iusto aut aperiam. Velit enim
      repudiandae nisi eveniet inventore ipsa! Nisi enim quos ut consequatur
      optio, saepe neque rerum consequuntur hic, cupiditate dolores? Vitae ut
      recusandae doloremque ab repellendus. Facilis, nisi. Molestiae, animi
      dolorum deserunt, ipsa aut veniam repudiandae nihil, quis recusandae ipsum
      voluptas sapiente quam iusto qui eum iste odit enim perferendis?
      Voluptatibus, error! Necessitatibus expedita praesentium quidem eos
      molestiae nisi, perferendis totam neque esse in alias deleniti quam ut
      architecto fugit incidunt pariatur? Cum quis aperiam veritatis in, earum
      repellat, tenetur, laboriosam commodi nostrum ea beatae! Doloribus,
      nesciunt nobis. Explicabo, laborum. Sapiente corporis consectetur neque
      exercitationem quam? Repellat, necessitatibus similique mollitia
      repudiandae aut asperiores dolorem debitis, autem, voluptatum at maiores
      suscipit ut magni voluptates facere error aliquam! Totam vitae blanditiis
      dicta quia fugiat dolore sequi laborum ab debitis! Laudantium consequuntur
      voluptatem cum nostrum quae architecto tenetur eaque nobis quasi delectus
      ab tempora iste exercitationem illum vero unde a dolor ipsam quam
      molestiae numquam, facere placeat neque. Accusantium incidunt odio
      possimus veniam nisi ea! Rem similique voluptatum at commodi, debitis
      ipsa!
    </div>
  );
}
