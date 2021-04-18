import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

const IndicationFragment = () => {
  const {
    title,
    subtitle,
    description,
    contents,
    imageUrl,
  } = useSelector((state: RootState) => ({
    title: state.indicationSlice.title,
    subtitle: state.indicationSlice.subtitle,
    description: state.indicationSlice.description,
    contents: state.indicationSlice.contents,
    imageUrl: state.indicationSlice.image_url,
  }));

  return (
    <footer className="w-full flex flex-col items-center">
      <div className="w-full px-4 py-5 max-w-screen-sm">
        {imageUrl ? (
          <img className="w-full object-contain" src={imageUrl} alt="" />
        ) : (
          <>
            <h4 className="text-sm font-bold" style={{ color: "#282828" }}>
              {title}
            </h4>
            <h4 className="text-sm" style={{ color: "#282828" }}>
              {subtitle}
            </h4>
            <span className="spacer vertical" style={{ height: "24px" }} />
            <h6 className="text-xs font-bold" style={{ color: "#282828" }}>
              {description}
            </h6>
            <span className="spacer vertical" style={{ height: "12px" }} />
            <dl>
              {contents.map(content => (
                <Fragment key={content.key}>
                  <dt className="block float-left font-bold text-xs leading-5">
                    {content.label}:&nbsp;
                  </dt>
                  <dd className="text-xs leading-5">{content.value}</dd>
                </Fragment>
              ))}
            </dl>
          </>
        )}
      </div>
    </footer>
  );
};

export default IndicationFragment;
