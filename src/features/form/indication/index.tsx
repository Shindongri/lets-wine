import { FC, useState } from "react";
import {
  Grid,
  Button,
  Divider,
  IconButton,
  FormControl,
  Switch,
  FormGroup,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import Spacer from "src/components/Spacer";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircle, Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/features";
import {
  setTitle,
  setSubtitle,
  setDescription,
  setImageUrl,
  setContentLabel,
  setContentValue,
  setWarning,
  addContent,
  removeContent,
} from "./indicationSlice";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: "480px",
  },
  sketchPickerWrapper: {
    padding: theme.spacing(1),
  },
}));

const Indication: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    imageUrl,
    title,
    subtitle,
    description,
    warning,
    contents,
  } = useSelector((state: RootState) => ({
    imageUrl: state.indicationSlice.image_url,
    title: state.indicationSlice.title,
    subtitle: state.indicationSlice.subtitle,
    description: state.indicationSlice.description,
    warning: state.indicationSlice.warning,
    contents: state.indicationSlice.contents,
  }));

  const [isImage, setIsImage] = useState<boolean>(!!imageUrl);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControlLabel
          className={classes.formControl}
          label="이미지로 등록하기"
          control={
            <Switch
              checked={isImage}
              onChange={(e) => setIsImage(e.target.checked)}
            />
          }
        />
      </Grid>
      {isImage ? (
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              label="이미지 URL"
              value={imageUrl}
              placeholder="https://"
              onChange={({ target: { value } }) =>
                dispatch(setImageUrl(value as string))
              }
            />
          </FormControl>
        </Grid>
      ) : (
        <>
          <Spacer axis="vertical" size={12} />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                label="제품명(영문)"
                value={title}
                onChange={({ target: { value } }) =>
                  dispatch(setTitle(value as string))
                }
              />
            </FormControl>
          </Grid>
          <Spacer axis="vertical" size={12} />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                label="제품명(한글)"
                value={subtitle}
                onChange={({ target: { value } }) =>
                  dispatch(setSubtitle(value as string))
                }
              />
            </FormControl>
          </Grid>
          <Spacer axis="vertical" size={12} />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                label="설명"
                value={description}
                onChange={({ target: { value } }) =>
                  dispatch(setDescription(value as string))
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
                color="primary"
                startIcon={<AddCircle />}
                onClick={() =>
                  dispatch(
                    addContent({
                      key: contents.length,
                      label: "",
                      value: "",
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
            <Grid container alignItems="center">
              {contents?.map((content, idx) => {
                return (
                  <>
                    <Grid item xs={10}>
                      <FormGroup key={idx} style={{ width: "100%" }}>
                        <FormControl className={classes.formControl}>
                          <TextField
                            style={{ minWidth: "120px" }}
                            variant="outlined"
                            value={content.label}
                            onChange={({ target: { value } }) =>
                              dispatch(
                                setContentLabel({
                                  key: idx,
                                  label: value,
                                })
                              )
                            }
                          />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                          <TextField
                            style={{ minWidth: "120px" }}
                            variant="outlined"
                            value={content.value}
                            onChange={({ target: { value } }) =>
                              dispatch(
                                setContentValue({
                                  key: idx,
                                  value,
                                })
                              )
                            }
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControl
                        className={classes.formControl}
                        style={{ minWidth: 0 }}
                      >
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
                  </>
                );
              })}
            </Grid>
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            value={warning}
            onChange={({ target: { value } }) =>
              dispatch(setWarning(value as string))
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Indication;
