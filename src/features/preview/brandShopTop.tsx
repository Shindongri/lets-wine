import { useSelector } from "react-redux";
import { RootState } from "src/features";

const BrandShopTopFragment = () => {
  const { title, subtitle, description, contents, link_url } = useSelector(
    (state: RootState) => ({
      title: state.brandShopTopSlice.title,
      subtitle: state.brandShopTopSlice.subtitle,
      link_url: state.brandShopTopSlice.link_url,
      description: state.brandShopTopSlice.description,
      contents: state.brandShopTopSlice.contents,
    })
  );

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <article
        style={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <a style={{ textDecoration: "none" }} href={link_url} target="_blank">
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              color: "#282828",
            }}
          >
            {title}
          </h4>
        </a>
        <span style={{ width: "1px", height: "8px", display: "block" }} />
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
            <span style={{ width: "1px", display: "block", height: "30px" }} />
          </>
        )}
        {description && (
          <>
            <p
              style={{ fontSize: "1rem", lineHeight: "1rem", color: "#4d4d4d" }}
            >
              {description}
            </p>
            <span style={{ width: "1px", display: "block", height: "30px" }} />
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
                  flex: "0 0 auto",
                  display: "block",
                  marginRight: "10px",
                  textDecoration: "none",
                }}
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
                <span
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
                {content.subtitle && (
                  <>
                    <span
                      style={{
                        width: "1px",
                        display: "block",
                        height: "8px",
                      }}
                    />
                    <h6
                      style={{
                        fontSize: "1rem",
                        lineHeight: ".75rem",
                        color: "#4d4d4d",
                      }}
                    >
                      {content.subtitle}
                    </h6>
                  </>
                )}
              </a>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default BrandShopTopFragment;
