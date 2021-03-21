import { FC, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  IconButton,
  Divider,
  InputLabel,
  Select,
  TextField,
  FormGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { AddCircle, Delete, Image } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import Spacer from "src/components/Spacer";
import { RootState } from "src/features";
import {
  setTitle,
  setSubtitle,
  setDescription,
  addContent,
  removeContent,
  setContentTitle,
  setContentSubtitle,
  setContentImageUrl,
  setContentLinkUrl,
  setImage,
  addImage,
  removeImage,
  clearContents,
  clearImages,
} from "./pairingSlice";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
}));

const MAX_CONTENTS = 4;
const MAX_IMAGES = 5;

const Index: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { title, subtitle, description, contents, images } = useSelector(
    (state: RootState) => ({
      title: state.pairingSlice.title,
      subtitle: state.pairingSlice.subtitle,
      description: state.pairingSlice.description,
      contents: state.pairingSlice.contents,
      images: state.pairingSlice.images,
    })
  );

  const [type, setType] = useState<number>(images.length > 0 ? 1 : 2);

  const handleType = (type: number) => {
    setType(type);
    type === 1 ? dispatch(clearContents()) : dispatch(clearImages());
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl
          className={classes.formControl}
          style={{ minWidth: "240px" }}
        >
          <InputLabel id="type-select">타입</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={type}
            onChange={({ target: { value } }) => handleType(value as number)}
          >
            <MenuItem value={1}>Scent / Pairing</MenuItem>
            <MenuItem value={2}>페어링 파트너 / 드링크 페어링</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="제목"
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
            label="부제"
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
      {type === 1 && (
        <Grid item xs={12}>
          <FormControl
            className={classes.formControl}
            style={{ minWidth: "240px" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Image />}
              onClick={() =>
                images.length < MAX_IMAGES && dispatch(addImage(""))
              }
            >
              이미지 추가
            </Button>
          </FormControl>
        </Grid>
      )}
      {type === 2 && (
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
      )}
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
      <Grid item xs={12}>
        {images.map((image, idx) => (
          <Grid container alignItems="center">
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

export default Index;
