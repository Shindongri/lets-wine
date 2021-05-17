import { combineReducers } from "redux";

import drinkingGuideSlice from "./form/drinkingGuide/drinkingGuideSlice";
import indicationSlice from "./form/indication/indicationSlice";
import mainSlice from "./form/main/mainSlice";
import pairingSlice from "./form/pairing/pairingSlice";
import varietiesSlice from "./form/varieties/varietiesSlice";
import scentSlice from "./form/scent/scentSlice";
import brandShopTopSlice from "./form/brandShopTop/brandShopTopSlice";
import brandShopBottomSlice from "./form/brandShopBottom/brandShopBottomSlice";
import appSlice from "./app/appSlice";
import untitledSlice from "./form/untitled/untitledSlice";

/* Root Reducer */
const rootReducer = combineReducers({
  drinkingGuideSlice,
  indicationSlice,
  mainSlice,
  pairingSlice,
  varietiesSlice,
  scentSlice,
  brandShopTopSlice,
  brandShopBottomSlice,
  appSlice,
  untitledSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
