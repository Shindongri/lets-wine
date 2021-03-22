import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentType } from "../../types";

export interface AppSliceState {
  components: Array<ComponentType>;
}

const initialState = {
  components: [],
} as AppSliceState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addComponent(state, action: PayloadAction<ComponentType>) {
      state.components.push(action.payload);
    },
    removeComponent(state, action) {
      state.components = [...state.components].filter(
        (component) => component !== action.payload
      );
    },
    setComponents(state, action: PayloadAction<Array<ComponentType>>) {
      state.components = action.payload;
    },
  },
});

export const {
  addComponent,
  removeComponent,
  setComponents,
} = appSlice.actions;

export default appSlice.reducer;
