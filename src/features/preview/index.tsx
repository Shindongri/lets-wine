import { FC, lazy, Fragment, Suspense } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { ComponentType } from "src/types";
import { RootState } from "src/features";

const Main = lazy(() => import("src/features/preview/main"));
const Varieties = lazy(() => import("src/features/preview/varieties"));
const Scent = lazy(() => import("src/features/preview/scent"));
const DrinkingGuide = lazy(() => import("src/features/preview/drinkingGuide"));
const Indication = lazy(() => import("src/features/preview/indication"));
const Pairing = lazy(() => import("src/features/preview/pairing"));

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

  const getComponent = (component: ComponentType) => {
    switch (component) {
      case ComponentType.MAIN:
        return <Main />;
      case ComponentType.SCENT:
        return <Scent />;
      case ComponentType.VARIETIES:
        return <Varieties />;
      case ComponentType.DRINKING_GUIDE:
        return <DrinkingGuide />;
      case ComponentType.PAIRING:
        return <Pairing />;
      case ComponentType.INDICATION:
        return <Indication />;
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
      <div id="result">
        <Suspense fallback={<div>loading...</div>}>
          {components.map((component, idx) => (
            <Fragment key={idx}>{getComponent(component)}</Fragment>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Preview;
