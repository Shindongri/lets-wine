import { useSelector } from "react-redux";
import { RootState } from "src/features";

const OthersDrinkingGuideFragment = () => {
  const {
    temperature: { min, max },
    otherGlassType,
    otherGlassDescription,
    otherGlassImageUrl,
    otherDecantingTitle,
    otherDecantingSubtitle,
    otherCharacteristic,
    otherCharacteristicName,
    otherCharacteristicImageUrl,
    otherDecantingImageUrl,
  } = useSelector((state: RootState) => ({
    otherGlassType: state.drinkingGuideSlice.otherGlassType,
    otherGlassDescription: state.drinkingGuideSlice.otherGlassDescription,
    otherGlassImageUrl: state.drinkingGuideSlice.otherGlassImageUrl,
    otherDecantingTitle: state.drinkingGuideSlice.otherDecantingTitle,
    otherDecantingSubtitle: state.drinkingGuideSlice.otherDecantingSubtitle,
    otherDecantingImageUrl: state.drinkingGuideSlice.otherDecantingImageUrl,
    otherCharacteristic: state.drinkingGuideSlice.otherCharacteristic,
    otherCharacteristicName: state.drinkingGuideSlice.otherCharacteristicName,
    otherCharacteristicImageUrl:
      state.drinkingGuideSlice.otherCharacteristicImageUrl,
    temperature: state.drinkingGuideSlice.temperature,
  }));

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(241, 241, 241)",
      }}
    >
      <article
        style={{
          width: "100%",
          padding: "2.5rem 1rem",
          maxWidth: "640px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4
            style={{
              fontSize: "13px",
              lineHeight: "1.25rem",
              color: "rgb(127, 127, 127)",
            }}
          >
            {otherGlassType}
          </h4>
          <span style={{ width: "1px", display: "block", height: "3px" }} />
          <h6
            style={{
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "1.25rem",
              color: "rgb(40, 40, 40)",
            }}
          >
            {otherGlassDescription}
          </h6>
          <span style={{ display: "block", width: "1px", height: "10px" }} />
          <div style={{ width: "240px", height: "60px" }}>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              src={otherGlassImageUrl}
              alt=""
            />
          </div>
        </div>
        <span style={{ display: "block", width: "1px", height: "25px" }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "13px",
                lineHeight: "1.25rem",
                color: "rgb(127, 127, 127)",
              }}
            >
              {otherDecantingTitle}
            </h4>
            <span style={{ display: "block", width: "1px", height: "3px" }} />
            <h6
              style={{
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "1.25rem",
                color: "rgb(40, 40, 40)",
              }}
            >
              {otherDecantingSubtitle}
            </h6>
            <span style={{ display: "block", width: "1px", height: "10px" }} />
            <div style={{ width: "50px", height: "auto" }}>
              <img
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                src={otherDecantingImageUrl}
                alt=""
              />
            </div>
          </div>
          <div>
            <h4
              style={{
                fontSize: "13px",
                lineHeight: "1.25rem",
                color: "rgb(127, 127, 127)",
              }}
            >
              적정 음용 온도
            </h4>
            <span style={{ display: "block", width: "1px", height: "3px" }} />
            <h6
              style={{
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "1.25rem",
                color: "rgb(40, 40, 40)",
              }}
            >
              {min}~{max}°C
            </h6>
            <span style={{ display: "block", width: "1px", height: "10px" }} />
            <div style={{ width: "50px", height: "auto" }}>
              <img
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                src="https://wineplz.cafe24.com/web/upload/img/temp_s.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <span style={{ display: "block", width: "1px", height: "25px" }} />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "start" }}
        >
          {otherCharacteristicImageUrl ? (
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              src={otherCharacteristicImageUrl}
              alt=""
            />
          ) : (
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
                    fontSize: "15px",
                    lineHeight: "1.25rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {otherCharacteristicName}
                </span>
                {otherCharacteristic && (
                  <>
                    <span style={{ width: "24px", height: "1px" }} />
                    <div
                      style={{
                        gridColumn: "span 5 / span 5",
                        height: "1.25rem",
                        width: "70%",
                      }}
                    >
                      <img
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                        src={`https://wineplz.cafe24.com/web/upload/img/bar_${otherCharacteristic}s.svg`}
                        alt=""
                      />
                    </div>
                  </>
                )}
              </li>
            </ul>
          )}
        </div>
      </article>
    </section>
  );
};

export default OthersDrinkingGuideFragment;
