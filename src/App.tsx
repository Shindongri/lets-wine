import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Form from "src/components/Form";
// import Preview from "src/components/Preview";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  paper: {},
  container: {},
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container>
        <Grid item xs={6}>
          <Paper>
            <Form />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {/*<Preview />*/}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
