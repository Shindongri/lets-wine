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
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            color: "#282828",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </h4>
        <div style={{ width: "1px", display: "block", height: "8px" }} />
        {subtitle && (
          <>
            <h6
              style={{
                fontSize: "1.5rem",
                lineHeight: "2rem",
                color: "#282828",
              }}
            >
              {subtitle}
            </h6>
            <div style={{ width: "1px", display: "block", height: "30px" }} />
          </>
        )}
        {description && (
          <>
            <p
              style={{ fontSize: "1rem", lineHeight: "1rem", color: "#4d4d4d" }}
            >
              {description}
            </p>
            <div style={{ width: "1px", display: "block", height: "30px" }} />
          </>
        )}
        {!!contents?.length && (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              overflowY: "hidden",
              margin: 0,
              padding: 0,
              paddingBottom: "1rem",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {contents.map((content, idx) => (
              <a
                key={idx}
                style={{
                  display: "block",
                  flex: "0 0 auto",
                  marginRight: "10px",
                  textDecoration: "none",
                }}
                href={content.link_url}
                target="_blank"
                rel="noreferrer"
              >
                {content.image_url && (
                  <img
                    style={{
                      width: "144px",
                      height: "173px",
                      objectFit: "contain",
                    }}
                    src={content.image_url}
                    alt=""
                  />
                )}
                <div
                  style={{ width: "1px", display: "block", height: "18px" }}
                />
                <h6
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1rem",
                    color: "#282828",
                  }}
                >
                  {content.title}
                </h6>
                <div
                  style={{ width: "1px", display: "block", height: "8px" }}
                />
                <h6
                  style={{
                    color: "#4d4d4d",
                    fontSize: "1rem",
                    lineHeight: ".75rem",
                  }}
                >
                  {content.subtitle}
                </h6>
              </a>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default PairingFragment;
