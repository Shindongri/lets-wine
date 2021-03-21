import { FC } from "react";
import { makeStyles } from "@material-ui/core";

interface Props {
  axis: "horizontal" | "vertical";
  size: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
}));

const Spacer: FC<Props> = ({ size, axis }) => {
  const classes = useStyles();
  const style =
    axis === "horizontal"
      ? { width: `${size}px`, height: "1px" }
      : { width: "1px", height: `${size}px` };

  return <span className={classes.root} style={style} />;
};

export default Spacer;
