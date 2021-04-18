import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

const MainFragment = () => {
  const { mainImageUrl, contents } = useSelector((state: RootState) => ({
    mainImageUrl: state.mainSlice.main_image_url,
    contents: state.mainSlice.contents,
  }));

  return (
    <section className="w-full flex flex-col items-center">
      <img className="w-full object-contain" src={mainImageUrl} alt="" />
      <article className="w-full px-4 py-10 max-w-screen-sm">
        <dl className="m-0 p-0">
          {contents.map((content, idx) => {
            return (
              <Fragment key={idx}>
                <dt className="font-bold text-2xl" style={{ color: "#282828" }}>
                  {content.title}
                </dt>
                <span className="spacer vertical" style={{ height: "18px" }} />
                <dd
                  className="text-base leading-5 flex flex-col justify-center whitespace-pre-line break-all"
                  style={{ color: "#4d4d4d" }}
                >
                  {content.description.split("\\n").join("\n")}
                  {content.image_url && (
                    <img className="w-full" src={content.image_url} alt="" />
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
                        className="absolute top-0 left-0 w-full h-full"
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
                  <span
                    className="spacer vertical"
                    style={{ height: "42px" }}
                  />
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
