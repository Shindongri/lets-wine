import { ComponentType } from "../types";

export const mapComponentTypeToLabel = (type: ComponentType) => {
  switch (type) {
    case ComponentType.MAIN:
      return "메인";
    case ComponentType.VARIETIES:
      return "품종";
    case ComponentType.PAIRING:
      return "Pairing / 드링킹 페어링 / 페어링 파트너";
    case ComponentType.SCENT:
      return "Scent";
    case ComponentType.INDICATION:
      return "한글 표시사항";
    case ComponentType.DRINKING_GUIDE:
      return "음용정보";
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
