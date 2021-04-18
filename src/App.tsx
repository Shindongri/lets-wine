import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "src/store";

import IndexPage from "./pages/IndexPage";
import AutomationPage from "./pages/AutomationPage";

let persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <IndexPage />
          </Route>
          <Route path="/auto">
            <AutomationPage />
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
