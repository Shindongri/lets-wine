import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

const MainFragment = () => {
  const { mainImageUrl, contents } = useSelector((state: RootState) => ({
    mainImageUrl: state.mainSlice.main_image_url,
    contents: state.mainSlice.contents,
  }));

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src={mainImageUrl}
        alt=""
      />
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
        <dl style={{ margin: 0, padding: 0 }}>
          {contents.map((content, idx) => {
            return (
              <Fragment key={idx}>
                <dt
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    fontWeight: "bold",
                    color: "#282828",
                  }}
                >
                  {content.title}
                </dt>
                <div style={{ width: "1px", height: "18px" }} />
                <dd
                  style={{
                    color: "#4d4d4d",
                    fontSize: "1rem",
                    lineHeight: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    whiteSpace: "pre-line",
                    wordBreak: "break-all",
                  }}
                >
                  {content.description.split("\\n").join("\n")}
                  {content.image_url && (
                    <img
                      style={{ width: "100%" }}
                      src={content.image_url}
                      alt=""
                    />
                  )}
                  {content.embedded_url && (
                    <div
                      style={{
                        position: "relative",
                        padding: "30px 0 56.25% 0",
                        height: 0,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        src={content.embedded_url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="youtube"
                      />
                    </div>
                  )}
                </dd>
                {contents.length - 1 !== idx && (
                  <div style={{ width: "1px", height: "42px" }} />
                )}
              </Fragment>
            );
          })}
        </dl>
      </article>
    </section>
  );
};

export default MainFragment;
