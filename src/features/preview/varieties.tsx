import { useSelector } from "react-redux";
import { RootState } from "src/features";

const VarietiesFragment = () => {
  const { title, subtitle, description } = useSelector((state: RootState) => ({
    title: state.varietiesSlice.title,
    subtitle: state.varietiesSlice.subtitle,
    description: state.varietiesSlice.description,
  }));

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
      }}
    >
      <article
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
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
            color: "#282828",
            marginTop: "8px",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
          }}
        >
          {subtitle}
        </h6>
        <p style={{ fontSize: "1rem", marginTop: "30px", lineHeight: 1.5 }}>
          {description}
        </p>
      </article>
    </section>
  );
};

export default VarietiesFragment;
