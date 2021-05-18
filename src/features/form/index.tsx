import { FC, lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Divider,
  Grid,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";

import { AVAILABLE_MENU_LIST } from "src/types";
import { mapMenuValueToMenuLabel } from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
}));

const Main = lazy(() => import("src/features/form/main"));
const Untitled1 = lazy(() => import("src/features/form/untitled"));
const Untitled2 = lazy(() => import("src/features/form/untitled"));
const Untitled3 = lazy(() => import("src/features/form/untitled"));
const Pairing = lazy(() => import("src/features/form/pairing"));
const Varieties = lazy(() => import("src/features/form/varieties"));
const DrinkingGuide = lazy(() => import("src/features/form/drinkingGuide"));
const Indication = lazy(() => import("src/features/form/indication"));
const Scent = lazy(() => import("src/features/form/scent"));
const BrandShopTop = lazy(() => import("src/features/form/brandShopTop"));
const BrandShopBottom = lazy(() => import("src/features/form/brandShopBottom"));

const Form: FC<{ selectedType: AVAILABLE_MENU_LIST | null }> = ({
  selectedType,
}) => {
  const classes = useStyles();

  return (
    <Paper>
      <Container className={classes.root} fixed>
        <Grid container>
          <Grid item xs={12}>
            <Grid container xs={12}>
              <Grid item xs={6}>
                {selectedType && (
                  <Typography variant="h6">
                    {mapMenuValueToMenuLabel(selectedType)}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Suspense fallback={() => <div>Loading...</div>}>
              {selectedType === AVAILABLE_MENU_LIST.MAIN && <Main />}
              {selectedType === AVAILABLE_MENU_LIST.PAIRING && <Pairing />}
              {selectedType === AVAILABLE_MENU_LIST.UNTITLED_1 && (
                <Untitled1 order={1} />
              )}
              {selectedType === AVAILABLE_MENU_LIST.UNTITLED_2 && (
                <Untitled2 order={2} />
              )}
              {selectedType === AVAILABLE_MENU_LIST.UNTITLED_3 && (
                <Untitled3 order={3} />
              )}
              {selectedType === AVAILABLE_MENU_LIST.SCENT && <Scent />}
              {selectedType === AVAILABLE_MENU_LIST.VARIETIES && <Varieties />}
              {selectedType === AVAILABLE_MENU_LIST.DRINKING_GUIDE && (
                <DrinkingGuide />
              )}
              {selectedType === AVAILABLE_MENU_LIST.INDICATION && (
                <Indication />
              )}
              {selectedType === AVAILABLE_MENU_LIST.BRAND_SHOP_TOP && (
                <BrandShopTop />
              )}
              {selectedType === AVAILABLE_MENU_LIST.BRAND_SHOP_BOTTOM && (
                <BrandShopBottom />
              )}
            </Suspense>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Form;
