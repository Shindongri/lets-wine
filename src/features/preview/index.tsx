import { FC } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Main from "src/features/preview/main";
import Varieties from "src/features/preview/varieties";
import Scent from "src/features/preview/scent";
import DrinkingGuide from "src/features/preview/drinkingGuide";
import Indication from "src/features/preview/indication";
import Pairing from "src/features/preview/pairing";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
  },
}));

const Preview: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="result">
        <Main />
        <Scent />
        <Varieties />
        <DrinkingGuide />
        <Pairing />
        <Indication />
      </div>
    </div>
  );
};

export default Preview;
