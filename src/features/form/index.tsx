import { ChangeEvent, FC, lazy, Suspense, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Container,
  Paper,
  InputLabel,
  Select,
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
const Pairing = lazy(() => import("src/features/form/pairing"));
const Varieties = lazy(() => import("src/features/form/varieties"));
const DrinkingGuide = lazy(() => import("src/features/form/drinkingGuide"));
const Indication = lazy(() => import("src/features/form/indication"));
const Scent = lazy(() => import("src/features/form/scent"));
const BrandShopTop = lazy(() => import("src/features/form/brandShopTop"));
const BrandShopBottom = lazy(() => import("src/features/form/brandShopBottom"));

const Form: FC = () => {
  const classes = useStyles();
  const [type, setType] = useState<AVAILABLE_MENU_LIST>(
    AVAILABLE_MENU_LIST.MAIN
  );

  const handleChange = ({
    target: { value },
  }: ChangeEvent<{ value: unknown }>) => setType(value as AVAILABLE_MENU_LIST);

  return (
    <Paper>
      <Container className={classes.root} fixed>
        <Grid container>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="component-select">컴포넌트</InputLabel>
              <Select
                labelId="component-select-label"
                id="component-select"
                value={type}
                onChange={handleChange}
              >
                {Object.values({...AVAILABLE_MENU_LIST})
                  .map((menu) => (
                    <MenuItem key={menu} value={menu}>
                      {mapMenuValueToMenuLabel(menu)}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Suspense fallback={() => <div>Loading...</div>}>
              {type === AVAILABLE_MENU_LIST.MAIN && <Main />}
              {type === AVAILABLE_MENU_LIST.PAIRING && <Pairing />}
              {type === AVAILABLE_MENU_LIST.SCENT && <Scent />}
              {type === AVAILABLE_MENU_LIST.VARIETIES && <Varieties />}
              {type === AVAILABLE_MENU_LIST.DRINKING_GUIDE && <DrinkingGuide />}
              {type === AVAILABLE_MENU_LIST.INDICATION && <Indication />}
              {type === AVAILABLE_MENU_LIST.BRAND_SHOP_TOP && <BrandShopTop />}
              {type === AVAILABLE_MENU_LIST.BRAND_SHOP_BOTTOM && (
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
