import { useSelector } from "react-redux";
import { RootState } from "src/features";

const BrandShopBottomFragment = () => {
  const { title, link_url, subtitle, contents } = useSelector(
    (state: RootState) => ({
      title: state.brandShopBottomSlice.title,
      link_url: state.brandShopBottomSlice.link_url,
      subtitle: state.brandShopBottomSlice.subtitle,
      description: state.brandShopBottomSlice.description,
      contents: state.brandShopBottomSlice.contents,
    })
  );

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: "bold",
            color: "#282828",
          }}
        >
          {title}
        </h4>
        <div style={{ width: "1px", height: "8px", display: "block" }} />
        {subtitle && link_url && (
          <a href={link_url} style={{ textDecoration: "none" }}>
            <h6
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                color: "#282828",
              }}
            >
              {subtitle}
            </h6>
            <div style={{ width: "1px", height: "30px", display: "block" }} />
          </a>
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
                  marginRight: "10px",
                  display: "block",
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
                <h6
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1rem",
                    color: "#282828",
                    marginTop: "18px",
                  }}
                >
                  {content.title}
                </h6>
                <h6
                  style={{
                    fontSize: "1rem",
                    color: "#4d4d4d",
                    marginTop: "8px",
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

export default BrandShopBottomFragment;
