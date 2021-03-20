import { FC, ChangeEvent, useState } from "react";
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
import { makeStyles } from "@material-ui/core/styles";

import Spacer from "src/components/General/Spacer";

const temp_marks = [
  {
    value: -40,
    label: "-40°C",
  },
  {
    value: -30,
    label: "-30°C",
  },
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
  {
    value: 30,
    label: "30°C",
  },
  {
    value: 40,
    label: "40°C",
  },
];

const char_marks = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
];

interface Characteristics {
  body: number;
  acidic: number;
  tannic: number;
  sweet: number;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: "480px",
  },
}));

const DrinkingGuide: FC = () => {
  const classes = useStyles();

  const [glass, setGlass] = useState<string>("3");
  const [decanting, setDecanting] = useState<boolean>(false);
  const [temp, setTemp] = useState([7, 13]);
  const [characteristics, setCharacteristics] = useState<Characteristics>({
    body: 1,
    acidic: 2,
    tannic: 3,
    sweet: 4,
  });

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">와인잔</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="화이트"
            value={glass}
            onChange={({
              target: { value },
            }: ChangeEvent<{ value: unknown }>) => setGlass(value as string)}
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
              onChange={(e) => setDecanting(e.target.checked)}
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
              value={temp}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={temp_marks}
              min={-40}
              max={40}
              onChange={(e, v) => setTemp(v as Array<number>)}
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
            <Slider
              step={1}
              value={characteristics.body}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={char_marks}
              min={1}
              max={4}
              onChange={(e, v) =>
                setCharacteristics({
                  ...characteristics,
                  body: v as number,
                })
              }
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
            <Slider
              step={1}
              value={characteristics.acidic}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={char_marks}
              min={1}
              max={4}
              onChange={(e, v) =>
                setCharacteristics({
                  ...characteristics,
                  acidic: v as number,
                })
              }
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
            <Slider
              step={1}
              value={characteristics.tannic}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={char_marks}
              min={1}
              max={4}
              onChange={(e, v) =>
                setCharacteristics({
                  ...characteristics,
                  tannic: v as number,
                })
              }
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
            <Slider
              step={1}
              value={characteristics.sweet}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={char_marks}
              min={1}
              max={4}
              onChange={(e, v) =>
                setCharacteristics({
                  ...characteristics,
                  sweet: v as number,
                })
              }
            />
          }
        />
      </Grid>
    </Grid>
  );
};

export default DrinkingGuide;
