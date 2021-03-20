import { FC, useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Switch,
  TextField,
} from "@material-ui/core";
import Spacer from "src/components/General/Spacer";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircle, Delete } from "@material-ui/icons";

interface Content {
  label: string;
  value: string;
}

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

  const [isImage, setIsImage] = useState<boolean>(false);
  const [content, setContent] = useState<Content>({
    label: "",
    value: "",
  });
  const [contents, setContents] = useState<Array<Content>>([
    {
      label: "유형",
      value: "",
    },
    {
      label: "수입사",
      value: "",
    },
    {
      label: "영업신고번호",
      value: "",
    },
    {
      label: "원료및식품첨가물",
      value: "",
    },
    {
      label: "알코올성분및함량",
      value: "",
    },
    {
      label: "반품및교환",
      value: "",
    },
    {
      label: "병입일",
      value: "",
    },
    {
      label: "용량",
      value: "",
    },
  ]);

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
            <TextField label="이미지 URL" placeholder="https://" />
          </FormControl>
        </Grid>
      ) : (
        <>
          <Spacer axis="vertical" size={12} />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="제품명(영문)" />
            </FormControl>
          </Grid>
          <Spacer axis="vertical" size={12} />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="제품명(한글)" />
            </FormControl>
          </Grid>
          <Spacer axis="vertical" size={12} />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                label="설명"
                placeholder="식품위생법 및 주세법에 의한 한글표시사항"
                defaultValue="식품위생법 및 주세법에 의한 한글표시사항"
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
                onClick={() => setContents([...contents, content])}
              >
                콘텐츠 추가
              </Button>
            </FormControl>
          </Grid>
          {contents.map((content, idx) => (
            <Grid container alignItems="center">
              <Grid item xs={10}>
                <FormGroup key={idx} style={{ width: "100%" }}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      defaultValue={content.label}
                      style={{ minWidth: "120px" }}
                      variant="outlined"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      value={content.value}
                      style={{ minWidth: "120px" }}
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid item xs={2}>
                <FormControl className={classes.formControl} style={{ minWidth: 0 }}>
                  <IconButton aria-label="delete" color="secondary">
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
          <Spacer axis="vertical" size={12} />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                label="경고"
                defaultValue="지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다. 19세 미만 청소년에게 판매금지 부정 불량 식품은 국번없이 1399경고: 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다. 19세 미만 청소년에게 판매금지 부정 불량 식품은 국번없이 1399"
              />
            </FormControl>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Indication;
