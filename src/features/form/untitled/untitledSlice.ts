import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UntitledSliceState {
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  title1: string;
  title2: string;
  title3: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
}

const initialState = {
  title1: "",
  title2: "",
  title3: "",
  subtitle1: "",
  subtitle2: "",
  subtitle3: "",
  imageUrl1: "",
  imageUrl2: "",
  imageUrl3: "",
} as UntitledSliceState;

const untitledSlice = createSlice({
  name: "untitled",
  initialState,
  reducers: {
    setImageUrl(
      state,
      action: PayloadAction<{ order: number; imageUrl: string }>
    ) {
      const { order, imageUrl } = action.payload;

      switch (order) {
        case 1:
          state.imageUrl1 = imageUrl;
          break;
        case 2:
          state.imageUrl2 = imageUrl;
          break;
        case 3:
          state.imageUrl3 = imageUrl;
          break;
      }
    },
    setTitle(state, action: PayloadAction<{ order: number; title: string }>) {
      const { order, title } = action.payload;

      switch (order) {
        case 1:
          state.title1 = title;
          break;
        case 2:
          state.title2 = title;
          break;
        case 3:
          state.title3 = title;
          break;
      }
    },
    setSubtitle(
      state,
      action: PayloadAction<{ order: number; subtitle: string }>
    ) {
      const { order, subtitle } = action.payload;

      switch (order) {
        case 1:
          state.subtitle1 = subtitle;
          break;
        case 2:
          state.subtitle2 = subtitle;
          break;
        case 3:
          state.subtitle3 = subtitle;
          break;
      }
    },
  },
});

export const { setImageUrl, setTitle, setSubtitle } = untitledSlice.actions;

export default untitledSlice.reducer;
