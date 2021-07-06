import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Slider,
  Switch,
  TextField,
} from "@material-ui/core";
import {
  setOtherCharacteristic,
  setOtherCharacteristicImage,
  setOtherCharacteristicName,
  setOtherDecantingImageUrl,
  setOtherDecantingSubtitle,
  setOtherDecantingTitle,
  setOtherGlassDescription,
  setOtherGlassImageUrl,
  setOtherGlassType,
  setTemperature,
} from "./drinkingGuideSlice";
import { temp_marks, useStyles } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../index";
import { Rating } from "@material-ui/lab";

const OthersForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    otherGlassType,
    otherGlassDescription,
    otherGlassImageUrl,
    temperature,
    otherDecantingTitle,
    otherDecantingSubtitle,
    otherCharacteristic,
    otherCharacteristicName,
    otherCharacteristicImageUrl,
    otherDecantingImageUrl,
  } = useSelector((state: RootState) => ({
    otherGlassType: state.drinkingGuideSlice.otherGlassType,
    otherGlassDescription: state.drinkingGuideSlice.otherGlassDescription,
    otherGlassImageUrl: state.drinkingGuideSlice.otherGlassImageUrl,
    otherDecantingTitle: state.drinkingGuideSlice.otherDecantingTitle,
    otherDecantingSubtitle: state.drinkingGuideSlice.otherDecantingSubtitle,
    otherDecantingImageUrl: state.drinkingGuideSlice.otherDecantingImageUrl,
    otherCharacteristic: state.drinkingGuideSlice.otherCharacteristic,
    otherCharacteristicName: state.drinkingGuideSlice.otherCharacteristicName,
    otherCharacteristicImageUrl:
      state.drinkingGuideSlice.otherCharacteristicImageUrl,
    temperature: state.drinkingGuideSlice.temperature,
  }));

  const [isImage, setIsImage] = useState<boolean>(false);

  useEffect(() => {
    !isImage && setOtherCharacteristicImage("");
  }, [isImage]);

  return (
    <>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="글래스 타입"
            value={otherGlassType}
            onChange={({ target: { value } }) =>
              dispatch(setOtherGlassType(value as string))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="글래스 설명"
            value={otherGlassDescription}
            onChange={({ target: { value } }) =>
              dispatch(setOtherGlassDescription(value as string))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="글래스 이미지"
            value={otherGlassImageUrl}
            onChange={({ target: { value } }) =>
              dispatch(setOtherGlassImageUrl(value as string))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="디켄팅 영역 제목"
            value={otherDecantingTitle}
            onChange={({ target: { value } }) =>
              dispatch(setOtherDecantingTitle(value))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="디켄팅 영역 부제목"
            value={otherDecantingSubtitle}
            onChange={({ target: { value } }) =>
              dispatch(setOtherDecantingSubtitle(value))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="디캔팅 영역 이미지"
            placeholder="https://"
            value={otherDecantingImageUrl}
            onChange={({ target: { value } }) =>
              dispatch(setOtherDecantingImageUrl(value))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          label="음용 온도"
          labelPlacement="top"
          className={classes.formControl}
          control={
            <Slider
              getAriaValueText={(value) => `${value}°C`}
              step={1}
              style={{ minWidth: "480px", paddingTop: "48px" }}
              value={[temperature.min, temperature.max]}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={temp_marks}
              min={-10}
              max={30}
              onChange={(e, v) => {
                const [min, max] = Array.isArray(v) ? v : [];

                min && max && dispatch(setTemperature({ min, max }));
              }}
            />
          }
        />
      </Grid>
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
              value={otherCharacteristicImageUrl}
              placeholder="https://"
              onChange={({ target: { value } }) =>
                dispatch(setOtherCharacteristicImage(value as string))
              }
            />
          </FormControl>
        </Grid>
      ) : (
        <>
          <Grid item xs={6}>
            <FormControlLabel
              label="별점"
              labelPlacement="top"
              className={classes.formControl}
              control={
                <TextField
                  label="별점 문구"
                  value={otherCharacteristicName}
                  onChange={({ target: { value } }) =>
                    dispatch(setOtherCharacteristicName(value as string))
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              label="별점"
              labelPlacement="top"
              className={classes.formControl}
              control={
                <Rating
                  value={otherCharacteristic}
                  max={4}
                  onChange={(e, v) => dispatch(setOtherCharacteristic(v))}
                />
              }
            />
          </Grid>
        </>
      )}
    </>
  );
};

export default OthersForm;
