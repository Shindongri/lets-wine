import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { Button, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import store from "src/store";
import Form from "src/features/form";
import Spacer from "src/components/Spacer";
import { AddCircleOutline } from "@material-ui/icons";
// import Preview from "src/features/Preview";

let persistor = persistStore(store);

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

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className={classes.root}>
          <Grid className={classes.container} container>
            <Grid item xs={4}>
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
                  <Form />
                </Grid>
              </Grid>
            </Grid>
            <Spacer axis="horizontal" size={24} />
            <Divider orientation="vertical" flexItem />
            <Spacer axis="horizontal" size={24} />
            <Grid item xs={8}>
              {/*<Preview />*/}
            </Grid>
          </Grid>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
