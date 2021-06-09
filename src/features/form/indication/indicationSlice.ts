import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndicationSliceState {
  image_url: string;
  title: string;
  subtitle: string;
  description: string;
  warning: string;
  contents: Array<{ key: number; label: string; value: string }>;
}

const initialState = {
  image_url: "https://letswine.co.kr/web/upload/img/detail/2other/blank.png",
  title: "",
  subtitle: "",
  description: "식품위생법 및 주세법에 의한 한글표시사항",
  warning: [
    "*생산연도에 따라 알코올 도수에 차이가 있을 수 있으니 정확한 함량은 라벨을 참고해 주세요.",
    "*코르크 안쪽에 묻어있는 주석산, 병 밑에 가라앉은 침전물은 숙성 과정에서 생기는 자연스러운 현상이며 품질과는 무관합니다.",
    "*내추럴와인은 제조 과정의 특성상 침전물이 발생할 수 있으며, 개봉 전 살짝 흔들어 마시면 진하고 깊은 맛을 즐길 수 있습니다.",
  ].join("\n"),
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
  setWarning,
  setImageUrl,
  setContentLabel,
  setContentValue,
  addContent,
  removeContent,
} = indicationSlice.actions;

export default indicationSlice.reducer;
