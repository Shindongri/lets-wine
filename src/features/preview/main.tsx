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
          padding: "2rem 1rem",
          maxWidth: "640px",
          boxSizing: "border-box",
        }}
      >
        <dl style={{ margin: "0px", padding: "0px" }}>
          {contents.map((content, idx) => {
            return (
              <Fragment key={idx}>
                <dt
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.2rem",
                    fontWeight: "bold",
                    color: "rgb(40, 40, 40)",
                  }}
                >
                  {content.title}
                </dt>
                <div style={{ width: "1px", height: "10px" }} />
                <dd
                  style={{
                    color: "rgb(77, 77, 77)",
                    fontSize: "13px",
                    lineHeight: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    whiteSpace: "pre-line",
                    wordBreak: "break-all",
                  }}
                >
                  {content.description?.includes("\\n") ? content.description.split("\\n").join("\n") : content.description}
                  {content.image_url && (
                    <img
                      style={{ width: "100%", marginTop: "12px" }}
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
                        marginTop: "12px"
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
                  <div style={{ width: "1px", height: "30px" }} />
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
