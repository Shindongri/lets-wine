import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Grid,
  MenuItem,
  GridList,
  GridListTile,
  Select,
} from "@material-ui/core";
import {
  AddCircleOutline,
  AttachFile,
  GetApp,
  Remove,
} from "@material-ui/icons";

import { AVAILABLE_MENU_LIST } from "../types";

import Spacer from "./Spacer";
import DraggableOrderList from "./DraggableOrderList";

import { RootState } from "src/features";
import Form from "src/features/form";
import {
  addComponent,
  addFiles,
  addThumbnail,
} from "src/features/app/appSlice";
import { insertResultToTemplate, mapMenuValueToMenuLabel } from "src/utils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "24px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  tool: {
    display: "flex",
  },
  button: {
    width: "144px",
  },
  gridList: {
    width: 256,
    height: "100%",
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

const Register: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { components, files, mainImageUrl, thumbnailList } = useSelector(
    (state: RootState) => ({
      components: state.appSlice.components,
      thumbnailList: state.appSlice.thumbnailList,
      files: state.appSlice.files,
      mainImageUrl: state.mainSlice.main_image_url,
    })
  );

  const [type, setType] = useState<AVAILABLE_MENU_LIST | null>(
    AVAILABLE_MENU_LIST.MAIN
  );

  const handleChange = ({
    target: { value },
  }: ChangeEvent<{ value: unknown }>) => setType(value as AVAILABLE_MENU_LIST);

  const handleClick = (t: AVAILABLE_MENU_LIST | null) => {
    if (t) {
      dispatch(addComponent(t));
      setType(null);
    }
  };

  const download = (stringifyHtml: string) => {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";

    const blob = new Blob([stringifyHtml], { type: "octet/stream" });
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = `${Math.random().toString(36).substr(2, 11)}.html`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadFiles = () => files.forEach((file) => file && download(file));

  const addHtmlFiles = async () => {
    const result = document.getElementById("result");

    result?.outerHTML &&
      (await dispatch(addFiles(insertResultToTemplate(result.outerHTML))));
    await dispatch(addThumbnail(mainImageUrl));
  };

  const remove = () => {
    try {
      localStorage.removeItem("persist:lets-wine");
      setTimeout(() => window.location.reload(), 300);
    } catch (e) {}
  };

  return (
    <Grid container alignItems="center" style={{ width: "100%" }}>
      <Grid item xs={12}>
        <Button
          className={classes.button}
          startIcon={<Remove />}
          variant="contained"
          color="secondary"
          onClick={remove}
        >
          모두 삭제
        </Button>
        <Spacer axis="vertical" size={24} />
      </Grid>
      {!!thumbnailList?.length && (
        <Grid item xs={12} className={classes.root}>
          <GridList cellHeight={200} spacing={1} className={classes.gridList}>
            {thumbnailList.map((thumbnail) => (
              <GridListTile key={thumbnail}>
                <img className="h-full object-cover" src={thumbnail} alt="" />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      )}
      <Grid item xs={12} className={classes.tool}>
        <Select
          labelId="component-select-label"
          id="component-select"
          value={type}
          onChange={handleChange}
          style={{ minWidth: "144px" }}
        >
          {Object.values(AVAILABLE_MENU_LIST)
            .filter((menu) => !components.includes(menu))
            .map((menu) => (
              <MenuItem key={menu} value={menu}>
                {mapMenuValueToMenuLabel(menu)}
              </MenuItem>
            ))}
        </Select>
        <Spacer axis="horizontal" size={12} />
        <Button
          className={classes.button}
          startIcon={<AddCircleOutline />}
          variant="contained"
          disabled={!type}
          color="default"
          onClick={() => handleClick(type)}
        >
          컴포넌트 추가
        </Button>
        <Spacer axis="horizontal" size={12} />
        <Button
          className={classes.button}
          startIcon={<AttachFile />}
          variant="contained"
          color="default"
          disabled={!components?.length}
          onClick={addHtmlFiles}
        >
          파일 추가
        </Button>
        <Spacer axis="horizontal" size={12} />
        <Button
          className={classes.button}
          startIcon={<GetApp />}
          variant="contained"
          color="primary"
          disabled={!files?.length}
          onClick={downloadFiles}
        >
          다운로드
        </Button>
      </Grid>
      <Spacer axis="vertical" size={24} />
      {!!components?.length && <DraggableOrderList items={components} />}
      <Grid item xs={12} style={{ marginTop: "24px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Form />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
