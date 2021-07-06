import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircle, Delete } from "@material-ui/icons";
import {
  TextField,
  FormGroup,
  TextareaAutosize,
  IconButton,
  FormControl,
  Grid,
  Button,
  Divider,
  Typography,
} from "@material-ui/core";
import Spacer from "src/components/Spacer";
import { RootState } from "src/features";
import {
  setMainImageUrl,
  addContent,
  removeContent,
  setContentTitle,
  setContentDescription,
  setContentImageUrl,
  setContentEmbeddedUrl,
} from "./mainSlice";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
}));

const MAX_CONTENTS = 10;

const Main: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { mainImageUrl, contents } = useSelector((state: RootState) => ({
    mainImageUrl: state.mainSlice.main_image_url,
    contents: state.mainSlice.contents,
  }));

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="메인 이미지 URL"
            placeholder="https://"
            style={{ minWidth: "240px" }}
            value={mainImageUrl}
            onChange={({ target: { value } }) =>
              dispatch(setMainImageUrl(value as string))
            }
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={24} />
      <Grid item xs={12}>
        <FormControl
          className={classes.formControl}
          style={{ minWidth: "240px" }}
        >
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddCircle />}
            onClick={() =>
              contents.length < MAX_CONTENTS &&
              dispatch(
                addContent({
                  key: contents.length,
                  title: "",
                  description: "",
                  image_url: "",
                  embedded_url: "",
                })
              )
            }
          >
            콘텐츠 추가
          </Button>
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        {contents.map((content, idx) => (
          <Grid key={idx} container alignItems="center">
            <Grid item xs={2}>
              <Typography noWrap component="small">{`콘텐츠 ${
                idx + 1
              }`}</Typography>
            </Grid>
            <Grid item xs={8}>
              <FormGroup key={idx} style={{ width: "100%" }}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="콘텐츠 제목"
                    value={content.title}
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                      dispatch(setContentTitle({ key: idx, title: value }))
                    }
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="이미지 URL"
                    value={content.image_url}
                    placeholder="https://"
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                      dispatch(
                        setContentImageUrl({ key: idx, imageUrl: value })
                      )
                    }
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="동영상 URL"
                    value={content.embedded_url}
                    placeholder="https://"
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                      dispatch(
                        setContentEmbeddedUrl({ key: idx, embeddedUrl: value })
                      )
                    }
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={6}
                    placeholder="콘텐츠 설명"
                    value={content.description}
                    style={{ minWidth: "180px" }}
                    onChange={({ target: { value } }) =>
                      dispatch(
                        setContentDescription({ key: idx, description: value })
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
                  onClick={() => dispatch(removeContent(idx))}
                >
                  <Delete />
                </IconButton>
              </FormControl>
            </Grid>
            {contents.length - 1 !== idx && (
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

export default Main;
