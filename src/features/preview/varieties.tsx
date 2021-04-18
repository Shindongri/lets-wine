import { useSelector } from "react-redux";
import { RootState } from "src/features";

const VarietiesFragment = () => {
  const { title, subtitle, description } = useSelector(
    (state: RootState) => ({
      title: state.varietiesSlice.title,
      subtitle: state.varietiesSlice.subtitle,
      description: state.varietiesSlice.description,
    })
  );

  return (
    <section
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <article className="px-4 py-10 max-w-screen-sm">
        <h4 className="font-bold text-2xl" style={{ color: "#282828" }}>
          {title}
        </h4>
        <span className="spacer vertical" style={{ height: "8px" }} />
        <h6 className="text-xl" style={{ color: "#282828" }}>
          {subtitle}
        </h6>
        <span className="spacer vertical" style={{ height: "30px" }} />
        <p className="text-base">{description}</p>
      </article>
    </section>
  );
};

export default VarietiesFragment;
