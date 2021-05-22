import { ChangeEvent, FC, useState } from "react";
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
  Radio,
  RadioGroup,
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

const types = [
  "*생산연도에 따라 알코올 도수에 차이가 있을 수 있으니 정확한 함량은 라벨을 참고해 주세요.",
  "*코르크 안쪽에 묻어있는 주석산, 병 밑에 가라앉은 침전물은 숙성 과정에서 생기는 자연스러운 현상이며 품질과는 무관합니다.",
  "*내추럴와인은 제조 과정의 특성상 침전물이 발생할 수 있으며, 개봉 전 살짝 흔들어 마시면 진하고 깊은 맛을 즐길 수 있습니다.",
];

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
  const [type, setType] = useState<number>(0);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<{ value: unknown }>) => {
    setType(Number(value));
    dispatch(setWarning(types[Number(value)]));
  };

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
          <RadioGroup
            aria-label="gender"
            name="함량 문구"
            value={type}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="문구 1" />
            <FormControlLabel value={1} control={<Radio />} label="문구 2" />
            <FormControlLabel value={2} control={<Radio />} label="문구 3" />
          </RadioGroup>
        </FormControl>
      </Grid>
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
