import { createSlice } from "@reduxjs/toolkit";

export interface VarietiesSliceState {
  title: string;
  subtitle: string;
  description: string;
}

const initialState = {
  title: "",
  subtitle: "",
  description: "",
} as VarietiesSliceState;

const varietiesSlice = createSlice({
  name: "varieties",
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
  },
});

export const { setTitle, setSubtitle, setDescription } = varietiesSlice.actions;

export default varietiesSlice.reducer;
