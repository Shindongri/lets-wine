import { AVAILABLE_MENU_LIST } from "../types";

export const mapMenuValueToMenuLabel = (type: AVAILABLE_MENU_LIST) => {
  switch (type) {
    case AVAILABLE_MENU_LIST.PICKUP:
      return "픽업";
    case AVAILABLE_MENU_LIST.MAIN:
      return "메인";
    case AVAILABLE_MENU_LIST.VARIETIES:
      return "품종";
    case AVAILABLE_MENU_LIST.PAIRING:
      return "페어링";
    case AVAILABLE_MENU_LIST.SCENT:
      return "풍미";
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
    <style>
      * {
        font-family: "Spoqa Han Sans Neo", "sans-serif";
      }
      img {
        border-style: initial !important;
      }
      html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
    </style>
  </head>
  <body>
    <div class="w-full">
    ${result}
    </div>
  </body>
</html>

`;
