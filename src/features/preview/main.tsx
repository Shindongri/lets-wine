import { useSelector } from "react-redux";
import { RootState } from "src/features";

const MainFragment = () => {
  const { mainImageUrl, shortcut, contents } = useSelector(
    (state: RootState) => ({
      mainImageUrl: state.mainSlice.main_image_url,
      shortcut: state.mainSlice.shortcut,
      contents: state.mainSlice.contents,
    })
  );

  return (
    <section className="w-full flex flex-col items-center">
      <img className="w-full object-contain" src={mainImageUrl} />
      <article className="px-4 py-10 max-w-screen-xl">
        <dl>
          {contents.map((content, idx) => (
            <>
              <dt className="font-bold text-2xl" style={{ color: "#282828" }}>
                {content.title}
              </dt>
              <span className="spacer vertical" style={{ height: "18px" }} />
              <dd
                className="text-base leading-5 flex flex-col justify-center"
                style={{ color: "#4d4d4d" }}
              >
                {content.description}
                <span className="spacer vertical" style={{ height: "24px" }} />
                <img className="w-full" src={content.image_url} />
                <span className="spacer vertical" style={{ height: "24px" }} />
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
                  />
                </div>
              </dd>
              {contents.length - 1 !== idx && (
                <span className="spacer vertical" style={{ height: "42px" }} />
              )}
            </>
          ))}
        </dl>
      </article>
    </section>
  );
};

export default MainFragment;
