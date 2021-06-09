import { FC } from "react";

const PickupFragment: FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "215px",
        backgroundColor: "rgb(205, 223, 116)",
        padding: "30px 1.5rem",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          margin: "0px",
          paddingBottom: "18px",
        }}
      >
        렛츠와인 페어링 픽업 안내
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "fit-content",
            minWidth: "80px",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "auto",
              minWidth: "45px",
              height: "60px",
              objectFit: "contain",
            }}
          >
            <img alt="" src="https://wineplz.cafe24.com/web/upload/img/icon_wine02.svg" />
          </div>
          <h6
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              padding: "0px",
              marginTop: "16px",
            }}
          >
            평일 오전 10시
          </h6>
          <p
            style={{
              fontSize: "10px",
              padding: "4px 0px 0px",
              margin: "0px",
              lineHeight: "1.5",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            이전까지 결제 완료
          </p>
        </div>
        <p style={{ fontSize: "20px", padding: "0px 10px" }}>&gt;</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "fit-content",
            minWidth: "100px",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "auto",
              minWidth: "45px",
              height: "60px",
              objectFit: "contain",
            }}
          >
            <img alt="" src="https://wineplz.cafe24.com/web/upload/img/icon_wine04_1.svg" />
          </div>
          <h6
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              padding: "0px",
              marginTop: "16px",
            }}
          >
            [배송 완료]
          </h6>
          <p
            style={{
              fontSize: "10px",
              padding: "4px 0px 0px",
              margin: "0px",
              lineHeight: "1.5",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            알림 톡 수신후 매장 방문하기
          </p>
        </div>
        <p style={{ fontSize: "20px", padding: "0px" }}>&gt;</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "fit-content",
            minWidth: "120px",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "auto",
              minWidth: "45px",
              height: "60px",
              objectFit: "contain",
            }}
          >
            <img alt="" src="https://wineplz.cafe24.com/web/upload/img/icon_wine03_1.svg" />
          </div>
          <h6
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              padding: "0px",
              marginTop: "16px",
            }}
          >
            당일 상품 픽업
          </h6>
          <p
            style={{
              fontSize: "10px",
              padding: "4px 0px 0px",
              margin: "0px",
              lineHeight: "1.5",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            서울/경기/인천 지역에 한함 외 지역은 +1일 소요
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickupFragment;
