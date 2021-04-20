import { FC } from "react";

const WarningFragment: FC = () => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <article
        style={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          maxWidth: "640px",
          boxSizing: "border-box",
        }}
      >
        <small
          style={{
            fontSize: "0.75rem",
            lineHeight: "1rem",
          }}
        >
          경고: 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중
          음주는 기형아 출생 위험을 높입니다.
          <br />
          <span style={{ color: "#fff", backgroundColor: "#000" }}>
            19세 미만 청소년에게 판매금지
          </span>
          &nbsp;부정 불량 식품은 국번없이 1399
        </small>
      </article>
    </section>
  );
};

export default WarningFragment;
