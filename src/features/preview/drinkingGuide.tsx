import { useSelector } from "react-redux";
import { RootState } from "src/features";

const DrinkingGuideFragment = () => {
  const {
    glass,
    decanting,
    temperature: { min, max },
    characteristics: { body, acidic, tannic, sweet },
  } = useSelector((state: RootState) => ({
    glass: state.drinkingGuideSlice.glass,
    decanting: state.drinkingGuideSlice.decanting,
    temperature: state.drinkingGuideSlice.temperature,
    characteristics: state.drinkingGuideSlice.characteristics,
  }));

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
      }}
    >
      <article
        style={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          maxWidth: "640px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: "#7f7f7f",
            }}
          >
            와인잔
          </h4>
          <span style={{ width: "1px", display: "block", height: "7px" }} />
          <h6
            style={{
              fontWeight: "bold",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: "#282828",
            }}
          >
            {Number(glass) === 1 && "기포가 유지되는 얇고 긴 잔"}
            {Number(glass) === 2 && "향을 모아주는 볼이 큰 잔"}
            {Number(glass) === 3 && "향을 모아주는 볼이 긴 잔"}
            {Number(glass) === 4 && "크기가 크고 볼륨이 풍성한 잔"}
            {Number(glass) === 5 && "입구가 좁고 각이 있는 잔"}
          </h6>
          <span style={{ display: "block", width: "1px", height: "20px" }} />
          <img
            width={240}
            height={72}
            src={`http://wineplz.cafe24.com/web/upload/img/wineglass_${glass}s.svg`}
            alt=""
          />
        </div>
        <span style={{ display: "block", width: "1px", height: "42px" }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#7f7f7f",
              }}
            >
              디켄팅
            </h4>
            <span style={{ display: "block", width: "1px", height: "7px" }} />
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#282828",
              }}
            >
              {decanting ? "필요함" : "하지 않음"}
            </h6>
            <span style={{ display: "block", width: "1px", height: "20px" }} />
            <img
              height={72}
              src={`http://wineplz.cafe24.com/web/upload/img/decanting${
                decanting ? 1 : 2
              }s.svg`}
              alt=""
            />
          </div>
          <div>
            <h4
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#7f7f7f",
              }}
            >
              적정 음용 온도
            </h4>
            <span style={{ display: "block", width: "1px", height: "7px" }} />
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#282828",
              }}
            >
              {min}~{max}°C
            </h6>
            <span style={{ display: "block", width: "1px", height: "20px" }} />
            <img
              height={72}
              src="http://wineplz.cafe24.com/web/upload/img/temp_s.svg"
              alt=""
            />
          </div>
        </div>
        <span style={{ display: "block", width: "1px", height: "42px" }} />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "start" }}
        >
          <ul style={{ width: "100%" }}>
            <li
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
              }}
            >
              <span
                style={{
                  gridColumn: "span 2 / span 2",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  whiteSpace: "nowrap",
                }}
              >
                바디
              </span>
              <span style={{ width: "24px", height: "1px" }} />
              <img
                style={{
                  gridColumn: "span 5 / span 5",
                  height: "1.5rem",
                  width: "75%",
                }}
                src={`http://wineplz.cafe24.com/web/upload/img/bar_${body}s.svg`}
                alt=""
              />
            </li>
            <span style={{ width: "1px", display: "block", height: "12px" }} />
            <li
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <span
                style={{
                  gridColumn: "span 2 / span 2",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  whiteSpace: "nowrap",
                }}
              >
                산미
              </span>
              <span style={{ width: "24px", height: "1px" }} />
              <img
                style={{
                  gridColumn: "span 5 / span 5",
                  height: "1.5rem",
                  width: "75%",
                }}
                src={`http://wineplz.cafe24.com/web/upload/img/bar_${acidic}s.svg`}
                alt=""
              />
            </li>
            <span style={{ height: "12px", width: "1px", display: "block" }} />
            <li
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <span
                style={{
                  gridColumn: "span 2 / span 2",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  whiteSpace: "nowrap",
                }}
              >
                타닌
              </span>
              <span
                style={{ width: "24px", height: "1px", display: "block" }}
              />
              <img
                style={{
                  gridColumn: "span 5 / span 5",
                  height: "1.5rem",
                  width: "75%",
                }}
                src={`http://wineplz.cafe24.com/web/upload/img/bar_${tannic}s.svg`}
                alt=""
              />
            </li>
            <div style={{ display: "block", width: "1px", height: "12px" }} />
            <li
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <span
                style={{
                  gridColumn: "span 2 / span 2",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  whiteSpace: "nowrap",
                }}
              >
                당도
              </span>
              <span style={{ width: "24px", height: "1px" }} />
              <img
                style={{
                  gridColumn: "span 5 / span 5",
                  height: "1.5rem",
                  width: "75%",
                }}
                src={`http://wineplz.cafe24.com/web/upload/img/bar_${sweet}s.svg`}
                alt=""
              />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default DrinkingGuideFragment;
