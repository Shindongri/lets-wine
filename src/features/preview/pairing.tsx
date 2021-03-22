import { useSelector } from "react-redux";
import { RootState } from "src/features";

const PairingFragment = () => {
  const { title, subtitle, description, contents } = useSelector(
    (state: RootState) => ({
      title: state.pairingSlice.title,
      subtitle: state.pairingSlice.subtitle,
      description: state.pairingSlice.description,
      contents: state.pairingSlice.contents,
    })
  );

  return (
    <article className="w-full px-4 py-10 max-w-screen-sm flex flex-col items-center">
      <h4 className="font-bold text-2xl" style={{ color: "#282828" }}>
        {title}
      </h4>
      <span className="spacer vertical" style={{ height: "8px" }} />
      {subtitle && (
        <>
          <h6 className="text-2xl" style={{ color: "#282828" }}>
            {subtitle}
          </h6>
          <span className="spacer vertical" style={{ height: "30px" }} />
        </>
      )}
      {description && (
        <>
          <p className="text-base leading-4" style={{ color: "#4d4d4d" }}>
            {description}
          </p>
          <span className="spacer vertical" style={{ height: "30px" }} />
        </>
      )}
      {!!contents?.length && (
        <div
          className="flex flex-nowrap overflow-x-auto overflow-y-hidden pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {contents.map((content, idx) => (
            <a
              key={idx}
              className="block"
              style={{ flex: "0 0 auto", marginLeft: "24px" }}
              href={content.link_url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  width: "144px",
                  height: "173px",
                  objectFit: "contain",
                }}
                src={content.image_url}
                alt=""
              />
              <span className="spacer vertical" style={{ height: "18px" }} />
              <h6 className="text-base leading-4" style={{ color: "#282828" }}>
                {content.title}
              </h6>
              <span className="spacer vertical" style={{ height: "8px" }} />
              <h6 className="text-base leading-3" style={{ color: "#4d4d4d" }}>
                {content.subtitle}
              </h6>
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

export default PairingFragment;
