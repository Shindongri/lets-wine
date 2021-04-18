import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScentSliceState {
  title: string;
  subtitle?: string;
  description?: string;
  images: Array<string>;
}

const initialState = {
  title: "",
  subtitle: "",
  description: "",
  images: [],
} as ScentSliceState;

const pairingSlice = createSlice({
  name: "scent",
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
    addImage(state, action) {
      const image = action.payload;

      state.images.push(image);
    },
    removeImage(state, action) {
      const key = action.payload;

      state.images = [...state.images].filter((image, idx) => idx !== key);
    },
    setImage(state, action: PayloadAction<{ key: number; imageUrl: string }>) {
      const { key, imageUrl } = action.payload;

      state.images[key] = imageUrl;
    },
    clearImages(state) {
      state.images = [];
    },
  },
});

export const {
  setTitle,
  setSubtitle,
  setDescription,
  setImage,
  addImage,
  removeImage,
  clearImages,
} = pairingSlice.actions;

export default pairingSlice.reducer;
