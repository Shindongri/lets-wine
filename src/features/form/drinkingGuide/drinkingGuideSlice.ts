import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Characteristics {
  body: number;
  acidic: number;
  tannic: number;
  sweet: number;
}

interface Temperature {
  min: number;
  max: number;
}

interface DrinkingGuideSliceState {
  glass: number;
  decanting: boolean;
  temperature: Temperature;
  characteristics: Characteristics;
}

const initialState = {
  glass: 3,
  decanting: true,
  temperature: {
    min: 7,
    max: 13,
  },
  characteristics: {
    body: 1,
    acidic: 2,
    tannic: 3,
    sweet: 4,
  },
} as DrinkingGuideSliceState;

const drinkingGuideSlice = createSlice({
  name: "drinkingGuide",
  initialState,
  reducers: {
    setGlass(state, action) {
      const glass = action.payload;

      state.glass = glass;
    },
    setDecanting(state, action) {
      const decanting = action.payload;

      state.decanting = decanting;
    },
    setTemperature(state, action: PayloadAction<Temperature>) {
      const { min, max } = action.payload;

      state.temperature.min = min;
      state.temperature.max = max;
    },
    setCharacteristicBody(state, action) {
      state.characteristics.body = action.payload;
    },
    setCharacteristicAcidic(state, action) {
      state.characteristics.acidic = action.payload;
    },
    setCharacteristicTannic(state, action) {
      state.characteristics.tannic = action.payload;
    },
    setCharacteristicSweet(state, action) {
      state.characteristics.sweet = action.payload;
    },
  },
});

export const {
  setGlass,
  setDecanting,
  setTemperature,
  setCharacteristicBody,
  setCharacteristicAcidic,
  setCharacteristicTannic,
  setCharacteristicSweet,
} = drinkingGuideSlice.actions;

export default drinkingGuideSlice.reducer;
