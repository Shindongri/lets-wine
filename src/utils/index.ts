import { AVAILABLE_MENU_LIST } from "../types";

export const mapMenuValueToMenuLabel = (type: AVAILABLE_MENU_LIST) => {
  switch (type) {
    case AVAILABLE_MENU_LIST.MAIN:
      return "메인";
    case AVAILABLE_MENU_LIST.VARIETIES:
      return "품종";
    case AVAILABLE_MENU_LIST.PAIRING:
      return "Pairing / 드링킹 페어링 / 페어링 파트너";
    case AVAILABLE_MENU_LIST.SCENT:
      return "Scent";
    case AVAILABLE_MENU_LIST.INDICATION:
      return "한글 표시사항";
    case AVAILABLE_MENU_LIST.DRINKING_GUIDE:
      return "음용정보";
    case AVAILABLE_MENU_LIST.WARNING:
      return "주류 경고문구";
    case AVAILABLE_MENU_LIST.ADULT:
      return "성인인증, 19세 경고문구";
    case AVAILABLE_MENU_LIST.SMART_ORDER:
      return "주류 스마트 오더";
    case AVAILABLE_MENU_LIST.BRAND_SHOP_TOP:
      return "브랜드샵(TOP)";
    case AVAILABLE_MENU_LIST.BRAND_SHOP_BOTTOM:
      return "브랜드샵(BOTTOM)";
  }
};

export const insertResultToTemplate = (result: string) => `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https//cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <style>
      * {
        font-family: "Spoqa Han Sans Neo", "sans-serif";
      }
      img {
        border-style: initial !important;
      }
      .spacer {
        display: block;
      }
      .spacer > .vertical {
        width: 1px;
      }
      .spacer > .horizontal {
        height: 1px;
      }
    </style>
  </head>
  <body>
    <div class="w-full">
    ${result}
    </div>
  </body>
</html>

`;
