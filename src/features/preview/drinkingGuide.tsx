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
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <article className="w-full px-4 py-10 max-w-screen-sm">
        <div className="flex flex-col">
          <h4 className="text-sm" style={{ color: "#7f7f7f" }}>
            와인잔
          </h4>
          <span className="spacer vertical" style={{ height: "14px" }} />
          <h6 className="text-sm font-bold" style={{ color: "#282828" }}>
            {Number(glass) === 1 && "화이트 와인잔"}
            {Number(glass) === 2 && "화이트 와인잔"}
            {Number(glass) === 3 && "화이트 와인잔"}
            {Number(glass) === 4 && "화이트 와인잔"}
            {Number(glass) === 5 && "화이트 와인잔"}
          </h6>
          <span className="spacer vertical" style={{ height: "20px" }} />
          <img
            className="self-center"
            width="80%"
            src={`http://wineplz.cafe24.com/web/upload/img/wineglass_${glass}s.svg`}
            alt=""
          />
        </div>
        <span className="spacer vertical" style={{ height: "42px" }} />
        <div className="grid grid-cols-2">
          <div>
            <h4 className="text-sm" style={{ color: "#7f7f7f" }}>
              디켄팅
            </h4>
            <span className="spacer vertical" style={{ height: "14px" }} />
            <h6 className="text-sm font-bold" style={{ color: "#282828" }}>
              {decanting ? "" : "하지 않음"}
            </h6>
            <span className="spacer vertical" style={{ height: "20px" }} />
            <img
              width="96"
              src={`http://wineplz.cafe24.com/web/upload/img/decanting${
                decanting ? 1 : 2
              }s.svg`}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-sm" style={{ color: "#7f7f7f" }}>
              보관온도
            </h4>
            <span className="spacer vertical" style={{ height: "14px" }} />
            <h6 className="text-sm font-bold" style={{ color: "#282828" }}>
              {min}~{max}°C
            </h6>
            <span className="spacer vertical" style={{ height: "20px" }} />
            <img
              width="96"
              src="http://wineplz.cafe24.com/web/upload/img/temp_s.svg"
              alt=""
            />
          </div>
        </div>
        <span className="spacer vertical" style={{ height: "42px" }} />
        <div className="w-full">
          <ul className="w-full">
            <li className="flex items-center w-full">
              <span className="col-span-2 text-base whitespace-nowrap">
                바디
              </span>
              <span className="spacer horizontal" style={{ width: "24px" }} />
              <img
                className="col-span-5 h-6 w-9/12"
                src={`http://wineplz.cafe24.com/web/upload/img/bar_${body}s.svg`}
                alt=""
              />
            </li>
            <span className="spacer vertical" style={{ height: "20px" }} />
            <li className="flex items-center w-full">
              <span className="col-span-2 text-base whitespace-nowrap">
                산미
              </span>
              <span className="spacer horizontal" style={{ width: "24px" }} />
              <img
                className="col-span-5 h-6 w-9/12"
                src={`http://wineplz.cafe24.com/web/upload/img/bar_${acidic}s.svg`}
                alt=""
              />
            </li>
            <span className="spacer vertical" style={{ height: "20px" }} />
            <li className="flex items-center w-full">
              <span className="col-span-2 text-base whitespace-nowrap">
                타닌
              </span>
              <span className="spacer horizontal" style={{ width: "24px" }} />
              <img
                className="col-span-5 h-6 w-9/12"
                src={`http://wineplz.cafe24.com/web/upload/img/bar_${tannic}s.svg`}
                alt=""
              />
            </li>
            <span className="spacer vertical" style={{ height: "20px" }} />
            <li className="flex items-center w-full">
              <span className="col-span-2 text-base whitespace-nowrap">
                당도
              </span>
              <span className="spacer horizontal" style={{ width: "24px" }} />
              <img
                className="col-span-5 h-6 w-9/12"
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
