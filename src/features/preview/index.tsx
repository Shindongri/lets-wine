import {FC, Fragment, lazy, Suspense} from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

import {AVAILABLE_MENU_LIST} from "src/types";
import {RootState} from "src/features";

const Main = lazy(() => import("src/features/preview/main"));
const Varieties = lazy(() => import("src/features/preview/varieties"));
const Scent = lazy(() => import("src/features/preview/scent"));
const DrinkingGuide = lazy(() => import("src/features/preview/drinkingGuide"));
const Indication = lazy(() => import("src/features/preview/indication"));
const Pairing = lazy(() => import("src/features/preview/pairing"));
const SmartOrder = lazy(() => import("src/features/preview/smartOrder"));
const Warning = lazy(() => import("src/features/preview/warning"));
const Adult = lazy(() => import("src/features/preview/adult"));
const BrandShopTop = lazy(() => import("src/features/preview/brandShopTop"));
const BrandShopBottom = lazy(
  () => import("src/features/preview/brandShopBottom")
);
const Pickup = lazy(() => import('src/features/preview/pickup'));

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
  },
}));

const Preview: FC = () => {
  const classes = useStyles();
  const { components } = useSelector((state: RootState) => ({
    components: state.appSlice.components,
  }));

  const getSection = (menu: AVAILABLE_MENU_LIST) => {
    switch (menu) {
      case AVAILABLE_MENU_LIST.MAIN:
        return <Main />;
      case AVAILABLE_MENU_LIST.SCENT:
        return <Scent />;
      case AVAILABLE_MENU_LIST.VARIETIES:
        return <Varieties />;
      case AVAILABLE_MENU_LIST.DRINKING_GUIDE:
        return <DrinkingGuide />;
      case AVAILABLE_MENU_LIST.INDICATION:
        return <Indication />;
      case AVAILABLE_MENU_LIST.PAIRING:
        return <Pairing />;
      case AVAILABLE_MENU_LIST.ADULT:
        return <Adult />;
      case AVAILABLE_MENU_LIST.WARNING:
        return <Warning />;
      case AVAILABLE_MENU_LIST.SMART_ORDER:
        return <SmartOrder />;
      case AVAILABLE_MENU_LIST.BRAND_SHOP_TOP:
        return <BrandShopTop />;
      case AVAILABLE_MENU_LIST.BRAND_SHOP_BOTTOM:
        return <BrandShopBottom />;
      case AVAILABLE_MENU_LIST.PICKUP:
        return <Pickup />
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
      <div id="result">
        <Suspense fallback={<div>loading...</div>}>
          {components.map((component, idx) => (
            <Fragment key={idx}>{getSection(component)}</Fragment>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Preview;
