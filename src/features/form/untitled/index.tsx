import { FC } from "react";
import { FormControl, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setImageUrl, setSubtitle, setTitle } from "./untitledSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../index";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
}));

interface Props {
  order: number;
}

const Untitled: FC<Props> = ({ order }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    imageUrl1,
    imageUrl2,
    imageUrl3,
    title1,
    title2,
    title3,
    subtitle1,
    subtitle2,
    subtitle3,
  } = useSelector((state: RootState) => ({
    imageUrl1: state.untitledSlice.imageUrl1,
    imageUrl2: state.untitledSlice.imageUrl2,
    imageUrl3: state.untitledSlice.imageUrl3,
    title1: state.untitledSlice.title1,
    title2: state.untitledSlice.title2,
    title3: state.untitledSlice.title3,
    subtitle1: state.untitledSlice.subtitle1,
    subtitle2: state.untitledSlice.subtitle2,
    subtitle3: state.untitledSlice.subtitle3,
  }));

  const getImageUrl = (n: number) => {
    switch (n) {
      case 1:
        return imageUrl1;
      case 2:
        return imageUrl2;
      case 3:
        return imageUrl3;
    }
  };
  const getTitle = (n: number) => {
    switch (n) {
      case 1:
        return title1;
      case 2:
        return title2;
      case 3:
        return title3;
    }
  };
  const getSubtitle = (n: number) => {
    switch (n) {
      case 1:
        return subtitle1;
      case 2:
        return subtitle2;
      case 3:
        return subtitle3;
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="제목"
            style={{ minWidth: "240px" }}
            value={getTitle(order)}
            onChange={({ target: { value } }) =>
              dispatch(setTitle({ title: value, order }))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="부제"
            style={{ minWidth: "240px" }}
            value={getSubtitle(order)}
            onChange={({ target: { value } }) =>
              dispatch(setSubtitle({ subtitle: value, order }))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="이미지 URL"
            placeholder="https://"
            style={{ minWidth: "240px" }}
            value={getImageUrl(order)}
            onChange={({ target: { value } }) =>
              dispatch(setImageUrl({ imageUrl: value, order }))
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Untitled;
