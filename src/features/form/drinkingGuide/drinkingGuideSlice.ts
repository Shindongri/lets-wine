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

export type BeveragesType = "wine" | "etc";

interface DrinkingGuideSliceState {
  type: BeveragesType;
  glass: number;
  decanting: boolean;
  temperature: Temperature;
  characteristics: Characteristics;

  otherGlassType: string;
  otherGlassDescription: "",
  otherGlassImageUrl: "",
  otherDecantingTitle: string;
  otherDecantingSubtitle: string;
  otherDecantingImageUrl: string;
  otherCharacteristicName: string;
  otherCharacteristic: number;
  otherCharacteristicImageUrl: string;
}

const initialState = {
  type: "wine",
  glass: 3,
  decanting: false,
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
  otherGlassType: "",
  otherGlassDescription: "",
  otherGlassImageUrl: "",
  otherDecantingTitle: "",
  otherDecantingSubtitle: "",
  otherDecantingImageUrl: "",
  otherCharacteristicName: "",
  otherCharacteristic: 1,
  otherCharacteristicImageUrl: "",
} as DrinkingGuideSliceState;

const drinkingGuideSlice = createSlice({
  name: "drinkingGuide",
  initialState,
  reducers: {
    setType(state, action: PayloadAction<BeveragesType>) {
      state.type = action.payload;
    },
    clear(state) {
      state = initialState;
    },
    setGlass(state, action) {
      state.glass = action.payload;
    },
    setTemperature(state, action: PayloadAction<Temperature>) {
      const { min, max } = action.payload;

      state.temperature.min = min;
      state.temperature.max = max;
    },
    setDecanting(state, action) {
      state.decanting = action.payload;
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
    setOtherGlassType(state, action) {
      state.otherGlassType = action.payload;
    },
    setOtherGlassDescription(state, action) {
      state.otherGlassDescription = action.payload;
    },
    setOtherGlassImageUrl(state, action) {
      state.otherGlassImageUrl = action.payload;
    },
    setOtherDecantingTitle(state, action: PayloadAction<string>) {
      state.otherDecantingTitle = action.payload;
    },
    setOtherDecantingSubtitle(state, action: PayloadAction<string>) {
      state.otherDecantingSubtitle = action.payload;
    },
    setOtherDecantingImageUrl(state, action: PayloadAction<string>) {
      state.otherDecantingImageUrl = action.payload;
    },
    setOtherCharacteristicName(state, action: PayloadAction<string>) {
      state.otherCharacteristicName = action.payload;
    },
    setOtherCharacteristic(state, action) {
      state.otherCharacteristic = action.payload;
    },
    setOtherCharacteristicImage(state, action: PayloadAction<string>) {
      state.otherCharacteristicImageUrl = action.payload;
    },
  },
});

export const {
  setType,
  setGlass,
  setDecanting,
  setTemperature,
  setCharacteristicBody,
  setCharacteristicAcidic,
  setCharacteristicTannic,
  setCharacteristicSweet,
  setOtherGlassType,
  setOtherGlassDescription,
  setOtherGlassImageUrl,
  setOtherCharacteristicName,
  setOtherCharacteristic,
  setOtherCharacteristicImage,
  setOtherDecantingTitle,
  setOtherDecantingImageUrl,
  setOtherDecantingSubtitle,
} = drinkingGuideSlice.actions;

export default drinkingGuideSlice.reducer;
