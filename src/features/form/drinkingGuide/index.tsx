import { FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  Grid,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RootState } from "src/features";

import { setType, BeveragesType } from "./drinkingGuideSlice";
import WineForm from "./WineForm";
import OthersForm from "./OthersForm";

export const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const temp_marks = [
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
];

const DrinkingGuide: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { type } = useSelector((state: RootState) => ({
    type: state.drinkingGuideSlice.type,
  }));

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xs={12} alignItems="center">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="type-label">음료 유형</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            label="음료 유형"
            value={type}
            onChange={({
              target: { value },
            }: ChangeEvent<{ value: unknown }>) =>
              dispatch(setType(value as BeveragesType))
            }
          >
            <MenuItem value="wine">와인</MenuItem>
            <MenuItem value="etc">그 외</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {type === "wine" ? <WineForm /> : <OthersForm />}
    </Grid>
  );
};

export default DrinkingGuide;
