import React, { ChangeEvent } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Switch,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import {
  setCharacteristicAcidic,
  setCharacteristicBody,
  setCharacteristicSweet,
  setCharacteristicTannic,
  setDecanting,
  setGlass,
  setTemperature,
} from "./drinkingGuideSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../index";
import { temp_marks, useStyles } from "./index";

const WineForm = () => {
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
    <>
      <Grid item xs={6}>
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
      <Grid item xs={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">와인잔</FormLabel>
          <RadioGroup
            row
            aria-label="glass"
            name="와인잔"
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
      <Grid item xs={12}>
        <FormControlLabel
          label="음용 온도"
          labelPlacement="top"
          className={classes.formControl}
          control={
            <Slider
              getAriaValueText={(value) => `${value}°C`}
              step={1}
              style={{ minWidth: "480px", paddingTop: "48px" }}
              value={[temperature.min, temperature.max]}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={temp_marks}
              min={-10}
              max={30}
              onChange={(e, v) => {
                const [min, max] = Array.isArray(v) ? v : [];

                min && max && dispatch(setTemperature({ min, max }));
              }}
            />
          }
        />
      </Grid>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
    </>
  );
};

export default WineForm;
