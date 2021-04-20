import { FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormLabel,
  FormControl,
  Grid,
  Slider,
  RadioGroup,
  Radio,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

import Spacer from "src/components/Spacer";
import { RootState } from "src/features";

import {
  setGlass,
  setDecanting,
  setTemperature,
  setCharacteristicBody,
  setCharacteristicAcidic,
  setCharacteristicTannic,
  setCharacteristicSweet,
} from "./drinkingGuideSlice";

const temp_marks = [
  {
    value: -20,
    label: "-20°C",
  },
  {
    value: -10,
    label: "-10°C",
  },
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 10,
    label: "10°C",
  },
  {
    value: 20,
    label: "20°C",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: "480px",
  },
}));

const DrinkingGuide: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { glass, decanting, characteristics, temperature } = useSelector(
    (state: RootState) => ({
      glass: state.drinkingGuideSlice.glass,
      decanting: state.drinkingGuideSlice.decanting,
      temperature: state.drinkingGuideSlice.temperature,
      characteristics: state.drinkingGuideSlice.characteristics,
    })
  );

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">와인잔</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="화이트"
            value={String(glass)}
            onChange={({
              target: { value },
            }: ChangeEvent<{ value: unknown }>) =>
              dispatch(setGlass(value as string))
            }
          >
            <FormControlLabel value="1" control={<Radio />} label="와인잔 1" />
            <FormControlLabel value="2" control={<Radio />} label="와인잔 2" />
            <FormControlLabel value="3" control={<Radio />} label="와인잔 3" />
            <FormControlLabel value="4" control={<Radio />} label="와인잔 4" />
            <FormControlLabel value="5" control={<Radio />} label="와인잔 5" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControlLabel
          className={classes.formControl}
          label="디켄팅 유무"
          control={
            <Switch
              checked={decanting}
              onChange={(e) => dispatch(setDecanting(e.target.checked))}
            />
          }
        />
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControlLabel
          label="음용 온도"
          labelPlacement="top"
          className={classes.formControl}
          control={
            <Slider
              getAriaValueText={(value) => `${value}°C`}
              step={1}
              value={[temperature.min, temperature.max]}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={temp_marks}
              min={-20}
              max={20}
              onChange={(e, v) => {
                const [min, max] = Array.isArray(v) ? v : [];

                min && max && dispatch(setTemperature({ min, max }));
              }}
            />
          }
        />
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControlLabel
          label="바디"
          labelPlacement="top"
          className={classes.formControl}
          control={
            <Rating
              value={characteristics.body}
              max={4}
              onChange={(e, v) => dispatch(setCharacteristicBody(v))}
            />
          }
        />
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControlLabel
          label="산미"
          labelPlacement="top"
          className={classes.formControl}
          control={
            <Rating
              value={characteristics.acidic}
              max={4}
              onChange={(e, v) => dispatch(setCharacteristicAcidic(v))}
            />
          }
        />
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControlLabel
          label="타닌"
          labelPlacement="top"
          className={classes.formControl}
          control={
            <Rating
              value={characteristics.tannic}
              max={4}
              onChange={(e, v) => dispatch(setCharacteristicTannic(v))}
            />
          }
        />
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControlLabel
          label="당도"
          labelPlacement="top"
          className={classes.formControl}
          control={
            <Rating
              value={characteristics.sweet}
              max={4}
              onChange={(e, v) => dispatch(setCharacteristicSweet(v))}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

export default DrinkingGuide;
