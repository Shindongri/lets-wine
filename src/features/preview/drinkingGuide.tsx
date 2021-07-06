import { useSelector } from "react-redux";
import { RootState } from "src/features";

import WineTemplate from './drinkingGuide/wine';
import OthersTemplate from './drinkingGuide/others';

const DrinkingGuideFragment = () => {
  const type = useSelector((state: RootState) => state.drinkingGuideSlice.type);

  return type === 'wine' ? <WineTemplate /> : <OthersTemplate />;
};

export default DrinkingGuideFragment;
