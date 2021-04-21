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
          padding: "1.8rem 1rem",
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
            fontSize: "15px",
            lineHeight: "0.2rem",
            color: "rgb(40, 40, 40)",
            marginTop: "5px",
          }}
        >
          {subtitle}
        </h6>
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.5rem",
            color: "rgb(77, 77, 77)",
            marginTop: "20px",
          }}
        >
          {description}
        </p>
        <div
          style={{
            marginTop: "15px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {images.map((image, idx) => (
            <Fragment key={idx}>
              <div style={{ width: "46px", marginRight: "10px" }}>
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
