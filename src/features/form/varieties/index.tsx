import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SketchPicker } from "react-color";

import {
  Grid,
  FormControl,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RootState } from "src/features";
import Spacer from "src/components/Spacer";
import {
  setTitle,
  setSubtitle,
  setDescription,
  setBgColor,
} from "./varietiesSlice";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
  sketchPickerWrapper: {
    padding: theme.spacing(1),
  },
}));

const Varieties: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { title, subtitle, description, background_color } = useSelector(
    (state: RootState) => ({
      title: state.varietiesSlice.title,
      subtitle: state.varietiesSlice.subtitle,
      description: state.varietiesSlice.description,
      background_color: state.varietiesSlice.background_color,
    })
  );

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="품종(영문)"
            value={title}
            placeholder="Ex. Chardonnay"
            style={{ minWidth: "240px" }}
            onChange={({ target: { value } }) => dispatch(setTitle(value))}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="퓸종(한글)"
            value={subtitle}
            placeholder="Ex. 샤도네이"
            style={{ minWidth: "240px" }}
            onChange={({ target: { value } }) => dispatch(setSubtitle(value))}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="설명"
            value={description}
            style={{ minWidth: "240px" }}
            onChange={({ target: { value } }) =>
              dispatch(setDescription(value))
            }
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControlLabel
          label="배경색"
          labelPlacement="top"
          control={
            <div className={classes.sketchPickerWrapper}>
              <SketchPicker
                color={background_color}
                onChangeComplete={(color) => dispatch(setBgColor(color.hex))}
              />
            </div>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Varieties;
