import { combineReducers } from "redux";

import drinkingGuideSlice from "./form/drinkingGuide/drinkingGuideSlice";
import indicationSlice from "./form/indication/indicationSlice";
import mainSlice from "./form/main/mainSlice";
import pairingSlice from "./form/pairing/pairingSlice";
import varietiesSlice from "./form/varieties/varietiesSlice";
import scentSlice from "./form/scent/scentSlice";

/* Root Reducer */
const rootReducer = combineReducers({
  drinkingGuideSlice,
  indicationSlice,
  mainSlice,
  pairingSlice,
  varietiesSlice,
  scentSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
