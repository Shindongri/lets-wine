import { createSlice } from "@reduxjs/toolkit";

export interface VarietiesSliceState {
  title: string;
  subtitle: string;
  description: string;
  background_color: string;
}

const initialState = {
  title: "",
  subtitle: "",
  description: "",
  background_color: "#faffe0",
} as VarietiesSliceState;

const varietiesSlice = createSlice({
  name: "varieties",
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
    setBgColor(state, action) {
      state.background_color = action.payload;
    },
  },
});

export const {
  setTitle,
  setSubtitle,
  setDescription,
  setBgColor,
} = varietiesSlice.actions;

export default varietiesSlice.reducer;
