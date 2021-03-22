import React, { FC } from "react";
import { Button, Divider, Grid } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Spacer from "src/components/Spacer";
import Preview from "src/features/preview";
import Form from "src/features/form";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
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
          <Grid container>
            <Grid item xs={12}>
              <Button
                startIcon={<AddCircleOutline />}
                variant="contained"
                color="primary"
              >
                컴포넌트 추가
              </Button>
            </Grid>
            <Spacer axis="vertical" size={24} />
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Form />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
