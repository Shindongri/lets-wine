import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

interface Props {
  order: number;
}

const UntitledFragment: FC<Props> = ({ order }) => {
  const { imageUrl1, imageUrl2, imageUrl3 } = useSelector(
    (state: RootState) => ({
      imageUrl1: state.untitledSlice.imageUrl1,
      imageUrl2: state.untitledSlice.imageUrl2,
      imageUrl3: state.untitledSlice.imageUrl3,
    })
  );

  const getImageUrl = (n: number) => {
    switch (n) {
      case 1:
        return imageUrl1;
      case 2:
        return imageUrl2;
      case 3:
        return imageUrl3;
    }
  };

  return (
    <section
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <article
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={getImageUrl(order) as string}
          alt=""
        />
      </article>
    </section>
  );
};

export default UntitledFragment;
