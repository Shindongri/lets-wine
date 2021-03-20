import { FC, useState } from "react";
import {
  Grid,
  FormControl,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SketchPicker } from "react-color";

import Spacer from "src/components/General/Spacer";

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

  const [bgColor, setBgColor] = useState<string>("#faffe0");

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="제목"
            placeholder="Ex. Chardonnay"
            style={{ minWidth: "240px" }}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="부제"
            placeholder="Ex. 샤도네이"
            style={{ minWidth: "240px" }}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField label="설명" style={{ minWidth: "240px" }} />
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
                color={bgColor}
                onChangeComplete={(color) => setBgColor(color.hex)}
              />
            </div>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Varieties;
