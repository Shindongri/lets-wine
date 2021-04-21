import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

const IndicationFragment = () => {
  const { title, subtitle, description, contents, imageUrl } = useSelector(
    (state: RootState) => ({
      title: state.indicationSlice.title,
      subtitle: state.indicationSlice.subtitle,
      description: state.indicationSlice.description,
      contents: state.indicationSlice.contents,
      imageUrl: state.indicationSlice.image_url,
    })
  );

  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          maxWidth: "640px",
          boxSizing: "border-box",
        }}
      >
        {imageUrl ? (
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            src={imageUrl}
            alt=""
          />
        ) : (
          <>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#282828",
              }}
            >
              {title}
            </h4>
            <h4
              style={{
                color: "#282828",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
              }}
            >
              {subtitle}
            </h4>
            <div style={{ display: "block", width: "1px", height: "24px" }} />
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                color: "#282828",
              }}
            >
              {description}
            </h6>
            <span style={{ width: "1px", height: "12px", display: "block" }} />
            <dl>
              {contents.map((content) => (
                <Fragment key={content.key}>
                  <dt
                    style={{
                      display: "block",
                      float: "left",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      lineHeight: "1.25rem",
                    }}
                  >
                    {content.label}:&nbsp;
                  </dt>
                  <dd
                    style={{
                      fontSize: "0.75rem",
                      lineHeight: "1.25rem",
                    }}
                  >
                    {content.value}
                  </dd>
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
