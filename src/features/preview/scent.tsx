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
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          maxWidth: "640px",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            fontWeight: "bold",
            color: "#282828",
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          {title}
        </h4>
        <h6
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            color: "#282828",
            marginTop: "8px",
          }}
        >
          {subtitle}
        </h6>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.5rem",
            color: "#4d4d4d",
            marginTop: "30px",
          }}
        >
          {description}
        </p>
        <div
          style={{
            marginTop: "30px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {images.map((image, idx) => (
            <Fragment key={idx}>
              <div style={{ width: `calc((100% / ${images.length}) - 36px)` }}>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src={image}
                  alt=""
                />
              </div>
            </Fragment>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ScentFragment;
