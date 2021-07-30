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
        backgroundColor: "rgb(241, 241, 241)",
      }}
    >
      <article
        style={{
          padding: "1.8rem 1rem",
          maxWidth: "640px",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            fontWeight: "bold",
            color: "rgb(40, 40, 40)",
            fontSize: "18px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h4>
        <h6
          style={{
            color: "rgb(40, 40, 40)",
            marginTop: "10px",
            fontSize: "15px",
            lineHeight: 1.2,
          }}
        >
          {subtitle}
        </h6>
        <p style={{ fontSize: "13px", marginTop: "20px", lineHeight: 1.5 }}>
          {description}
        </p>
      </article>
    </section>
  );
};

export default VarietiesFragment;
