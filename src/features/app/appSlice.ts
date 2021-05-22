import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AVAILABLE_MENU_LIST } from "../../types";

export interface AppSliceState {
  components: Array<AVAILABLE_MENU_LIST>;
  files: Array<string>;
  thumbnailList: Array<string>;
}

const initialState = {
  components: [
    AVAILABLE_MENU_LIST.UNTITLED_1,
    AVAILABLE_MENU_LIST.ADULT,
    AVAILABLE_MENU_LIST.MAIN,
    AVAILABLE_MENU_LIST.VARIETIES,
    AVAILABLE_MENU_LIST.SCENT,
    AVAILABLE_MENU_LIST.DRINKING_GUIDE,
    AVAILABLE_MENU_LIST.INDICATION,
    AVAILABLE_MENU_LIST.WARNING,
    AVAILABLE_MENU_LIST.SMART_ORDER,
  ],
  files: [],
  thumbnailList: [],
} as AppSliceState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addComponent(state, action: PayloadAction<AVAILABLE_MENU_LIST>) {
      state.components.push(action.payload);
    },
    removeComponent(state, action) {
      state.components = state.components.filter(
        (component) => component !== action.payload
      );
    },
    setComponents(state, action: PayloadAction<Array<AVAILABLE_MENU_LIST>>) {
      state.components = action.payload;
    },
    addFiles(state, action) {
      state.files.push(action.payload);
    },
    addThumbnail(state, action) {
      state.thumbnailList.push(action.payload);
    },
  },
});

export const {
  addComponent,
  removeComponent,
  setComponents,
  addFiles,
  addThumbnail,
} = appSlice.actions;

export default appSlice.reducer;
