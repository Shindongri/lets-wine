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

import { ComponentType } from "src/types";

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

const Form: FC = () => {
  const classes = useStyles();
  const [type, setType] = useState<ComponentType>(ComponentType.MAIN);
  const handleChange = ({
    target: { value },
  }: ChangeEvent<{ value: unknown }>) => setType(value as ComponentType);

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
                <MenuItem value={ComponentType.MAIN}>메인</MenuItem>
                <MenuItem value={ComponentType.VARIETIES}>품종</MenuItem>
                <MenuItem value={ComponentType.PAIRING}>
                  Scent / Pairing / 드링크 페어링 / 페어링 파트너
                </MenuItem>
                <MenuItem value={ComponentType.DRINKING_GUIDE}>
                  음용정보
                </MenuItem>
                <MenuItem value={ComponentType.INDICATION}>
                  한글 표시사항
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Suspense fallback={() => <div>Loading...</div>}>
              {type === ComponentType.MAIN && <Main />}
              {type === ComponentType.PAIRING && <Pairing />}
              {type === ComponentType.VARIETIES && <Varieties />}
              {type === ComponentType.DRINKING_GUIDE && <DrinkingGuide />}
              {type === ComponentType.INDICATION && <Indication />}
            </Suspense>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Form;
