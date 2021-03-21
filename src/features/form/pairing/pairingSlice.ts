import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Content {
  key: number;
  title: string;
  subtitle?: string;
  image_url?: string;
  link_url?: string;
}

export interface PairingSliceState {
  title: string;
  subtitle?: string;
  description?: string;
  contents: Array<Content>;
  images: Array<string>;
}

const initialState = {
  title: "",
  subtitle: "",
  description: "",
  contents: [],
  images: [],
} as PairingSliceState;

const pairingSlice = createSlice({
  name: "pairing",
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
    addContent(state, action: PayloadAction<Content>) {
      const content = action.payload;

      state.contents.push(content);
    },
    removeContent(state, action) {
      state.contents = [...state.contents].filter(
        (content) => content.key !== action.payload
      );
    },
    setContentTitle(
      state,
      action: PayloadAction<{ key: number; title: string }>
    ) {
      const { key, title } = action.payload;

      state.contents[key].title = title;
    },
    setContentSubtitle(
      state,
      action: PayloadAction<{ key: number; subtitle: string }>
    ) {
      const { key, subtitle } = action.payload;

      state.contents[key].subtitle = subtitle;
    },
    setContentImageUrl(
      state,
      action: PayloadAction<{ key: number; imageUrl: string }>
    ) {
      const { key, imageUrl } = action.payload;

      state.contents[key].image_url = imageUrl;
    },
    setContentLinkUrl(
      state,
      action: PayloadAction<{ key: number; linkUrl: string }>
    ) {
      const { key, linkUrl } = action.payload;

      state.contents[key].link_url = linkUrl;
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
    clearContents(state) {
      state.contents = [];
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
  addContent,
  removeContent,
  setContentTitle,
  setContentSubtitle,
  setContentImageUrl,
  setContentLinkUrl,
  setImage,
  addImage,
  removeImage,
  clearContents,
  clearImages,
} = pairingSlice.actions;

export default pairingSlice.reducer;
