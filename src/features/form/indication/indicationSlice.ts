import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndicationSliceState {
  image_url: string;
  title: string;
  subtitle: string;
  description: string;
  contents: Array<{ key: number; label: string; value: string }>;
  warning: string;
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
      label: "수입사",
      value: "",
    },
    {
      key: 2,
      label: "영업신고번호",
      value: "",
    },
    {
      key: 3,
      label: "원료및식품첨가물",
      value: "",
    },
    {
      key: 4,
      label: "알코올성분및함량",
      value: "",
    },
    {
      key: 5,
      label: "반품및교환",
      value: "",
    },
    {
      key: 6,
      label: "병입일",
      value: "",
    },
    {
      key: 7,
      label: "제조사",
      value: "",
    },
    {
      key: 8,
      label: "용량",
      value: "",
    },
  ],
  warning:
    "지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다. 19세 미만 청소년에게 판매금지 부정 불량 식품은 국번없이 1399경고: 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다. 19세 미만 청소년에게 판매금지 부정 불량 식품은 국번없이 1399",
} as IndicationSliceState;

const indicationSlice = createSlice({
  name: "indication",
  initialState,
  reducers: {
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
    setWarning(state, action) {
      state.warning = action.payload;
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
  setWarning,
  setContentLabel,
  setContentValue,
  addContent,
  removeContent,
} = indicationSlice.actions;

export default indicationSlice.reducer;
