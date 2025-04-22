export const AppPath = [
  { pathname: "/", name: "หน้าแรก", list: [] },
  {
    pathname: "/save",
    name: "ออมเงิน",
    list: [
      { pathname: "/save/dime-save", name: "เงินฝากออมทรัพย์" },
      { pathname: "/save/dime-fcd", name: "เงินฝากเงินตราต่างประเทศ" },
    ],
  },
  {
    pathname: "/invest",
    name: "ลงทุน",
    list: [
      { pathname: "/invest/fund", name: "กองทุน" },
      { pathname: "/invest/stock-us", name: "หุ้นสหรัฐฯ" },
      { pathname: "/invest/stock-th", name: "หุ้นไทย" },
      { pathname: "/invest/bond", name: "หุ้นกู้" },
      { pathname: "/invest/gold", name: "ทองคำ" },
    ],
  },
  { pathname: "/manage", name: "จัดการ", list: [] },
];
