import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UntitledSliceState {
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
}

const initialState = {
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
  },
});

export const { setImageUrl } = untitledSlice.actions;

export default untitledSlice.reducer;
