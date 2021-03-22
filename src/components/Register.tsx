import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  Button,
  Grid,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
} from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";

import { ComponentType } from "../types";

import Spacer from "./Spacer";
import DraggableOrderList from "./DraggableOrderList";

import { RootState } from "src/features";
import Form from "src/features/form";
import { addComponent } from "src/features/app/appSlice";
import { insertResultToTemplate } from "src/utils";

const Register: FC = () => {
  const dispatch = useDispatch();
  const { components } = useSelector((state: RootState) => ({
    components: state.appSlice.components,
  }));

  const [type, setType] = useState<ComponentType | null>(ComponentType.MAIN);
  const [resultHtmlString, setResultHtmlString] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<{ value: unknown }>) => setType(value as ComponentType);

  const handleClick = (t: ComponentType | null) => {
    if (t) {
      dispatch(addComponent(t));
      setType(null);
    }
  };

  const handleExtract = () => {
    const result = document.getElementById("result");

    result?.outerHTML &&
      setResultHtmlString(insertResultToTemplate(result?.outerHTML));

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Grid container alignItems="center" style={{ width: "100%" }}>
      <Grid item xs={5}>
        <Select
          labelId="component-select-label"
          id="component-select"
          value={type}
          onChange={handleChange}
          style={{ minWidth: "100%" }}
        >
          <MenuItem value={ComponentType.MAIN}>메인</MenuItem>
          <MenuItem value={ComponentType.VARIETIES}>품종</MenuItem>
          <MenuItem value={ComponentType.SCENT}>Scent</MenuItem>
          <MenuItem value={ComponentType.PAIRING}>
            Pairing / 드링크 페어링 / 페어링 파트너
          </MenuItem>
          <MenuItem value={ComponentType.DRINKING_GUIDE}>음용정보</MenuItem>
          <MenuItem value={ComponentType.INDICATION}>한글 표시사항</MenuItem>
        </Select>
      </Grid>
      <Spacer axis="horizontal" size={24} />
      <Grid item xs={3}>
        <Button
          startIcon={<AddCircleOutline />}
          variant="contained"
          disabled={!type}
          color="primary"
          onClick={() => handleClick(type)}
        >
          컴포넌트 추가
        </Button>
      </Grid>
      <Grid item xs={3} justify="flex-end">
        <CopyToClipboard text={resultHtmlString} onCopy={handleCopied}>
          <Button variant="contained" color="secondary" onClick={handleExtract}>
            HTML추출
          </Button>
        </CopyToClipboard>
      </Grid>
      {!!components?.length && <DraggableOrderList items={components} />}
      <Grid item xs={12} style={{ marginTop: "24px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Form />
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={copied}
        onClose={() => setCopied(false)}
        aria-labelledby="simple-modal-title"
      >
        <DialogTitle id="simple-modal-title">
          HTML copy was successful.
        </DialogTitle>
      </Dialog>
    </Grid>
  );
};

export default Register;
