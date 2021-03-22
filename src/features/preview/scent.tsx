import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

const ScentFragment = () => {
  const { title, subtitle, description, images } = useSelector(
    (state: RootState) => ({
      title: state.scentSlice.title,
      subtitle: state.scentSlice.subtitle,
      description: state.scentSlice.description,
      images: state.scentSlice.images,
    })
  );

  return (
    <section className="w-full flex flex-col items-center">
      <article className="w-full px-4 py-10 max-w-screen-sm">
        <h4 className="font-bold text-2xl" style={{ color: "#282828" }}>
          {title}
        </h4>
        <span className="spacer vertical" style={{ height: "8px" }} />
        <h6 className="text-2xl" style={{ color: "#282828" }}>
          {subtitle}
        </h6>
        <span className="spacer vertical" style={{ height: "30px" }} />
        <p className="text-base leading-4" style={{ color: "#4d4d4d" }}>
          {description}
        </p>
        <span className="spacer vertical" style={{ height: "30px" }} />
        <div className="w-full flex items-center justify-between">
          {images.map((image, idx) => (
            <Fragment key={idx}>
              <img style={{ width: `calc((100% / ${images.length}) - 24px)` }} src={image} />
            </Fragment>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ScentFragment;
