import { FC } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Divider,
  TextField,
  FormGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Delete, Image } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import Spacer from "src/components/Spacer";
import { RootState } from "src/features";
import {
  setTitle,
  setSubtitle,
  setDescription,
  setImage,
  addImage,
  removeImage,
} from "./scentSlice";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
}));

const MAX_IMAGES = 5;

const Scent: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { title, subtitle, description, images } = useSelector(
    (state: RootState) => ({
      title: state.scentSlice.title,
      subtitle: state.scentSlice.subtitle,
      description: state.scentSlice.description,
      images: state.scentSlice.images,
    })
  );

  return (
    <Grid container className={classes.root}>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="제목"
            value={title}
            style={{ minWidth: "240px" }}
            onChange={({ target: { value } }) => dispatch(setTitle(value))}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="부제"
            value={subtitle}
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
        <FormControl
          className={classes.formControl}
          style={{ minWidth: "240px" }}
        >
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<Image />}
            onClick={() => images.length < MAX_IMAGES && dispatch(addImage(""))}
          >
            이미지 추가
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {images.map((image, idx) => (
          <Grid key={idx} container alignItems="center">
            <Grid item xs={10}>
              <FormGroup key={idx} style={{ width: "100%" }}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="이미지 URL"
                    value={image}
                    placeholder="https://"
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                      dispatch(
                        setImage({
                          key: idx,
                          imageUrl: value,
                        })
                      )
                    }
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={2}>
              <FormControl className={classes.formControl}>
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  onClick={() => dispatch(removeImage(idx))}
                >
                  <Delete />
                </IconButton>
              </FormControl>
            </Grid>
            {images.length - 1 !== idx && (
              <Grid item xs={12}>
                <Divider />
              </Grid>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Scent;
