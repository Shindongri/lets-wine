import { FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircle, Delete } from "@material-ui/icons";
import {
  TextField,
  FormControlLabel,
  Switch,
  FormGroup,
  IconButton,
  FormControl,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import Spacer from "src/components/General/Spacer";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
}));

interface Content {
  title: string;
  description: string;
  image_url?: string;
  embedded_url?: string;
}

const Main: FC = () => {
  const classes = useStyles();

  const [hasShortcut, setHasShortCut] = useState<boolean>(false);
  const [content, setContent] = useState<Content>({
    title: "",
    description: "",
    embedded_url: "",
  });
  const [contents, setContents] = useState<Array<Content>>([]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="메인 이미지 URL"
            placeholder="https://"
            style={{ minWidth: "240px" }}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={24} />
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              name="Y"
              checked={hasShortcut}
              onChange={(e) => setHasShortCut(e.target.checked)}
            />
          }
          label="브랜드샵 바로가기"
        />
      </Grid>
      <Spacer axis="vertical" size={12} />
      {hasShortcut && (
        <Grid item xs={12}>
          <FormGroup>
            <FormControl className={classes.formControl}>
              <TextField
                label="브랜드샵 바로가기 제목"
                style={{ minWidth: "240px" }}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                label="브랜드샵 바로가기 설명"
                style={{ minWidth: "240px" }}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                label="브랜드샵 바로가기 URL"
                placeholder="https://"
                style={{ minWidth: "240px" }}
              />
            </FormControl>
          </FormGroup>
        </Grid>
      )}
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
            onClick={() => setContents([...contents, content])}
          >
            콘텐츠 추가
          </Button>
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        {contents.map((content, idx) => (
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <FormGroup key={idx} style={{ width: "100%" }}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="콘텐츠 제목"
                    value={content.title}
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="이미지 URL"
                    value={content.image_url}
                    placeholder="https://"
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="동영상 URL"
                    value={content.embedded_url}
                    placeholder="https://"
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="콘텐츠 설명"
                    value={content.embedded_url}
                    style={{ minWidth: "180px" }}
                    variant="outlined"
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={2}>
              <FormControl className={classes.formControl}>
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
      </Grid>
    </Grid>
  );
};

export default Main;
