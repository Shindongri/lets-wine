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

import { AddCircle, Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import Spacer from "src/components/Spacer";
import { RootState } from "src/features";
import {
  setTitle,
  addContent,
  removeContent,
  setContentTitle,
  setContentSubtitle,
  setContentImageUrl,
  setContentLinkUrl,
} from "./pairingSlice";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
}));

const MAX_CONTENTS = 10;

const Index: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { title, contents } = useSelector(
    (state: RootState) => ({
      title: state.pairingSlice.title,
      contents: state.pairingSlice.contents,
    })
  );

  return (
    <Grid container className={classes.root}>
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
                })
              )
            }
          >
            콘텐츠 추가
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {contents.map((content, idx) => (
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <FormGroup key={idx} style={{ width: "100%" }}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="링크 URL"
                    value={content.link_url}
                    placeholder="https://"
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                      dispatch(
                        setContentLinkUrl({
                          key: idx,
                          linkUrl: value,
                        })
                      )
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
                        setContentImageUrl({
                          key: idx,
                          imageUrl: value,
                        })
                      )
                    }
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="제목"
                    value={content.title}
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                      dispatch(
                        setContentTitle({
                          key: idx,
                          title: value,
                        })
                      )
                    }
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="설명"
                    value={content.subtitle}
                    style={{ minWidth: "180px" }}
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                      dispatch(
                        setContentSubtitle({
                          key: idx,
                          subtitle: value,
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

export default Index;
