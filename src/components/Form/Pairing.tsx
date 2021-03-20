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

import Spacer from "src/components/General/Spacer";
import { AddCircle, Delete, Image } from "@material-ui/icons";

interface Content {
  image_url?: string;
  title: string;
  description: string;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
  },
  sketchPickerWrapper: {
    padding: theme.spacing(1),
  },
}));

const Pairing: FC = () => {
  const classes = useStyles();

  const [type, setType] = useState<number>(1);

  const [image, setImage] = useState<string>("");
  const [content, setContent] = useState<Content>({
    title: "",
    description: "",
  });
  const [contents, setContents] = useState<Array<Content>>([]);
  const [images, setImages] = useState<Array<string>>([]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="제목"
            placeholder="Ex. Chardonnay"
            style={{ minWidth: "240px" }}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="부제"
            placeholder="Ex. 샤도네이"
            style={{ minWidth: "240px" }}
          />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField label="설명" style={{ minWidth: "240px" }} />
        </FormControl>
      </Grid>
      <Spacer axis="vertical" size={12} />
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
            onChange={({ target: { value } }) => setType(value as number)}
          >
            <MenuItem value={1}>Scent / Pairing</MenuItem>
            <MenuItem value={2}>페어링 파트너 / 드링크 페어링</MenuItem>
          </Select>
        </FormControl>
      </Grid>
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
              onClick={() => setImages([...images, image])}
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
              onClick={() => setContents([...contents, content])}
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
                    value={content.image_url}
                    placeholder="https://"
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
                    label="제목"
                    value={content.title}
                    style={{ minWidth: "120px" }}
                    variant="outlined"
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="설명"
                    value={content.description}
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

export default Pairing;
