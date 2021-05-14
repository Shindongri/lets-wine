import { FC } from "react";

interface StepProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const Step: FC<StepProps> = ({ imageUrl, title, subtitle }) => {
  return (
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
        <img src={imageUrl} alt="" />
      </div>
      <h6
        style={{
          fontSize: "10px",
          fontWeight: "bold",
          padding: 0,
          marginTop: "16px",
        }}
      >
        {title}
      </h6>
      {subtitle.split("\n").map((s, i) => (
        <p
          style={{
            fontSize: "10px",
            padding:  i === 0 ? "4px 0 0 0" : 0,
            margin: 0,
            lineHeight: 1.5,
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {s}
        </p>
      ))}
    </div>
  );
};

const PickupFragment: FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "248px",
        backgroundColor: "#cddf74",
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
        <Step
          imageUrl="http://wineplz.cafe24.com/web/upload/img/icon_wine02.svg"
          title="평일 오전 10시"
          subtitle="이전까지 결제 완료"
        />
        <p style={{ fontSize: "20px", padding: "0 4px" }}>&gt;</p>
        <Step
          imageUrl="http://wineplz.cafe24.com/web/upload/img/icon_wine04_1.svg"
          title="[배송 완료]"
          subtitle={`알림 톡 수신후\n매장 방문하기`}
        />
        <p style={{ fontSize: "20px", padding: "0 4px" }}>&gt;</p>
        <Step
          imageUrl="http://wineplz.cafe24.com/web/upload/img/icon_wine03_1.svg"
          title="당일 상품 픽업"
          subtitle={`서울/경기/인천 지역에 한함\n외 지역은 +1일 소요`}
        />
      </div>
    </div>
  );
};

export default PickupFragment;
