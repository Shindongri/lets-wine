import React, { FC } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AVAILABLE_MENU_LIST } from "../types";

import { mapCsvToJson } from "src/utils/converter";
import data from "src/ddd.json";

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

  console.log(mapCsvToJson(data));

  // const overwriteStore = () => {
  //   const json = mapCsvToJson(data);
  //
  //   Object.values(AVAILABLE_MENU_LIST).map(menu => {
  //     switch (menu) {
  //       case AVAILABLE_MENU_LIST.WARNING: {
  //         json[menu]
  //
  //         break;
  //       }
  //       case AVAILABLE_MENU_LIST.BRAND_SHOP_TOP: break;
  //       case AVAILABLE_MENU_LIST.MAIN: break;
  //       case AVAILABLE_MENU_LIST.PAIRING: break;
  //       case AVAILABLE_MENU_LIST.VARIETIES: break;
  //       case AVAILABLE_MENU_LIST.DRINKING_GUIDE: break;
  //       case AVAILABLE_MENU_LIST.INDICATION: break;
  //       case AVAILABLE_MENU_LIST.SCENT: break;
  //       case AVAILABLE_MENU_LIST.SMART_ORDER: break;
  //       case AVAILABLE_MENU_LIST.BRAND_SHOP_BOTTOM: break;
  //     }
  //   })
  //
  // }

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
