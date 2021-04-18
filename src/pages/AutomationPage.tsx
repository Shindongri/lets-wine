import React, { FC, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { mapCsvToJson } from "src/utils/converter";
import data from "src/test.json";

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AutomationPage: FC = () => {
  const classes = useStyles();

  useEffect(() => {
    mapCsvToJson(data);
  }, []);

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            Execute
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AutomationPage;
