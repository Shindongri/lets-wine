import React, { FC } from "react";
import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Spacer from "src/components/Spacer";
import Register from "src/components/Register";

import Preview from "src/features/preview";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  paper: {},
  container: {
    width: "100%",
    height: "100%",
  },
}));

const IndexPage: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container>
        <Grid item xs={5}>
          <Register />
        </Grid>
        <Spacer axis="horizontal" size={24} />
        <Divider orientation="vertical" flexItem />
        <Spacer axis="horizontal" size={24} />
        <Grid item xs={5}>
          <Preview />
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexPage;
