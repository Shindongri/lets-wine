import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndicationSliceState {
  image_url: string;
  title: string;
  subtitle: string;
  description: string;
  contents: Array<{ key: number; label: string; value: string }>;
}

const initialState = {
  image_url: "",
  title: "",
  subtitle: "",
  description: "식품위생법 및 주세법에 의한 한글표시사항",
  contents: [
    {
      key: 0,
      label: "유형",
      value: "",
    },
    {
      key: 1,
      label: "원산지",
      value: "",
    },
    {
      key: 2,
      label: "수입사",
      value: "",
    },
    {
      key: 3,
      label: "영업신고번호",
      value: "",
    },
    {
      key: 4,
      label: "원료및식품첨가물",
      value: "",
    },
    {
      key: 5,
      label: "알코올성분및함량",
      value: "",
    },
    {
      key: 6,
      label: "반품및교환",
      value: "",
    },
    {
      key: 7,
      label: "병입일",
      value: "",
    },
    {
      key: 8,
      label: "제조사",
      value: "",
    },
    {
      key: 9,
      label: "용량",
      value: "",
    },
  ],
} as IndicationSliceState;

const indicationSlice = createSlice({
  name: "indication",
  initialState,
  reducers: {
    clear(state) {
      state = initialState;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setSubtitle(state, action) {
      state.subtitle = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setImageUrl(state, action) {
      state.image_url = action.payload;
    },
    setContentLabel(state, action) {
      const { key, label } = action.payload;

      state.contents[key].label = label;
    },
    setContentValue(state, action) {
      const { key, value } = action.payload;

      state.contents[key].value = value;
    },
    addContent(
      state,
      action: PayloadAction<{ key: number; label: string; value: string }>
    ) {
      state.contents.push(action.payload);
    },
    removeContent(state, action) {
      state.contents = [...state.contents].filter(
        (content) => content.key !== action.payload
      );
    },
  },
});

export const {
  setTitle,
  setSubtitle,
  setDescription,
  setImageUrl,
  setContentLabel,
  setContentValue,
  addContent,
  removeContent,
} = indicationSlice.actions;

export default indicationSlice.reducer;