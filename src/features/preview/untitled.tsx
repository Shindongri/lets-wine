import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/features";

interface Props {
  order: number;
}

const UntitledFragment: FC<Props> = ({ order }) => {
  const {
    imageUrl1,
    imageUrl2,
    imageUrl3,
    title1,
    title2,
    title3,
    subtitle1,
    subtitle2,
    subtitle3,
  } = useSelector((state: RootState) => ({
    imageUrl1: state.untitledSlice.imageUrl1,
    imageUrl2: state.untitledSlice.imageUrl2,
    imageUrl3: state.untitledSlice.imageUrl3,
    title1: state.untitledSlice.title1,
    title2: state.untitledSlice.title2,
    title3: state.untitledSlice.title3,
    subtitle1: state.untitledSlice.subtitle1,
    subtitle2: state.untitledSlice.subtitle2,
    subtitle3: state.untitledSlice.subtitle3,
  }));

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
  const getTitle = (n: number) => {
    switch (n) {
      case 1:
        return title1;
      case 2:
        return title2;
      case 3:
        return title3;
    }
  };
  const getSubtitle = (n: number) => {
    switch (n) {
      case 1:
        return subtitle1;
      case 2:
        return subtitle2;
      case 3:
        return subtitle3;
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
        <div
          style={{
            margin: 0,
            padding: "20px 0 5px 0",
          }}
        >
          <h6
            style={{
              margin: 0,
              padding: 0,
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            {getTitle(order)}
          </h6>
          <p
            style={{
              margin: 0,
              padding: "5px 0 0 0",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            {getSubtitle(order)}
          </p>
        </div>

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
