import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Shortcut {
  title: string;
  description: string;
  link_url: string;
}

export interface Content {
  key: number;
  title: string;
  description: string;
  image_url?: string;
  embedded_url?: string;
}

export interface MainSliceState {
  main_image_url: string;
  shortcut: Shortcut;
  contents: Array<Content>;
}

const initialState = {
  main_image_url: "",
  shortcut: {
    title: "",
    description: "",
    link_url: "",
  },
  contents: [],
} as MainSliceState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMainImageUrl(state, action) {
      state.main_image_url = action.payload;
    },
    setShortcutTitle(state, action) {
      state.shortcut.title = action.payload;
    },
    setShortcutDescription(state, action) {
      state.shortcut.description = action.payload;
    },
    setShortcutLinkUrl(state, action) {
      state.shortcut.link_url = action.payload;
    },
    addContent(state, action: PayloadAction<Content>) {
      state.contents.push(action.payload);
    },
    setContentTitle(state, action) {
      const { key, title } = action.payload;

      state.contents[key].title = title;
    },
    setContentDescription(state, action) {
      const { key, description } = action.payload;

      state.contents[key].description = description;
    },
    setContentImageUrl(state, action) {
      const { key, imageUrl } = action.payload;

      state.contents[key].image_url = imageUrl;
    },
    setContentEmbeddedUrl(state, action) {
      const { key, embeddedUrl } = action.payload;

      state.contents[key].embedded_url = embeddedUrl;
    },
    removeContent(state, action) {
      state.contents = [...state.contents].filter((content, idx) => idx !== action.payload);
    }
  },
});

export const {
  setMainImageUrl,
  setShortcutTitle,
  setShortcutDescription,
  setShortcutLinkUrl,
  addContent,
  removeContent,
  setContentTitle,
  setContentDescription,
  setContentImageUrl,
  setContentEmbeddedUrl,
} = mainSlice.actions;

export default mainSlice.reducer;
