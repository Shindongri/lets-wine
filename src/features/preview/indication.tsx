import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

const IndicationFragment = () => {
  const {
    title,
    subtitle,
    description,
    contents,
    warning,
    imageUrl,
  } = useSelector((state: RootState) => ({
    title: state.indicationSlice.title,
    subtitle: state.indicationSlice.subtitle,
    description: state.indicationSlice.description,
    contents: state.indicationSlice.contents,
    warning: state.indicationSlice.warning,
    imageUrl: state.indicationSlice.image_url,
  }));

  return (
    <footer className="w-full flex flex-col items-center">
      <div className="w-full px-4 py-10 max-w-screen-sm">
        {imageUrl ? (
          <img className="w-full object-contain" src={imageUrl} />
        ) : (
          <>
            <h4 className="text-sm font-bold" style={{ color: "#282828" }}>
              {title}
            </h4>
            <h4 className="text-sm" style={{ color: "#282828" }}>
              {subtitle}
            </h4>
            <h6 className="text-xs" style={{ color: "#282828" }}>
              {description}
            </h6>
            <span className="spacer vertical" style={{ height: "24px" }} />
            <dl>
              {contents.map((content, idx) => (
                <Fragment key={idx}>
                  <dt className="block float-left font-bold text-xs leading-5">
                    {content.label}:&nbsp;
                  </dt>
                  <dd className="text-xs leading-5">{content.value}</dd>
                </Fragment>
              ))}
            </dl>
            <span className="spacer vertical" style={{ height: "24px" }} />
            <small className="text-xs leading-3">{warning}</small>
          </>
        )}
      </div>
    </footer>
  );
};

export default IndicationFragment;
