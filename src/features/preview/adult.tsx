import { FC } from "react";

const AdultFragment: FC = () => {
  return (
    <div style={{ width: "100%", marginBottom: "1rem" }}>
      <div
        style={{
          backgroundColor: "#f1f1f1",
          width: "100%",
          height: "8rem",
          fontSize: "1rem",
          lineHeight: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: 0, padding: 0 }}>
            회원가입시 성인인증을 완료했다면 -
          </p>
          <div
            style={{
              display: "block",
              textAlign: "center",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
              border: "1px solid #dadada",
            }}
          >
            계속 이용하기
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "10rem",
            right: "1.25rem",
            bottom: 0,
          }}
        >
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            src="http://wineplz.cafe24.com/web/upload/img/pro_ok3.svg"
            alt=""
          />
        </div>
      </div>
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "#dadada" }}
      />
      <div
        style={{
          width: "100%",
          height: "8rem",
          fontSize: "1rem",
          lineHeight: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          boxSizing: "border-box",
          position: "relative",
          backgroundColor: "#f1f1f1",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: 0, padding: 0 }}>
            회원가입시{" "}
            <b style={{ fontWeight: "bold" }}>성인인증을 하지 않았다면 -</b>
          </p>
          <a
            style={{
              display: "block",
              textAlign: "center",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
              color: "#fff",
              backgroundColor: "rgb(31, 41, 55)",
              textDecoration: "none",
            }}
            href="/"
          >
            인증하러 가기
          </a>
        </div>
        <div
          style={{
            position: "absolute",
            width: "6rem",
            bottom: 0,
            right: "2rem",
          }}
        >
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            src="http://wineplz.cafe24.com/web/upload/img/pro_go3.svg"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          boxSizing: "border-box",
          backgroundColor: "#f6f6f6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "1.25rem",
              height: "1.25rem",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              src="http://wineplz.cafe24.com/web/upload/img/19con.svg"
              alt=""
            />
          </div>
          <h3
            style={{
              fontSize: "1rem",
              lineHeight: 1.5,
              fontWeight: "bold",
              padding: "0.5rem",
            }}
          >
            주류의 통신판매에 관한 명령 위임 고시
          </h3>
        </div>
        <p
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            wordBreak: "break-all",
          }}
        >
          관계법령에 따라 미성년자는 구매할 수 없으며, 19세 이상 성인인증을
          하셔야 구매 가능한 상품입니다.
        </p>
      </div>
    </div>
  );
};

export default AdultFragment;
