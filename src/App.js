import React from "react";
import { Provider } from "react-redux";
import AppRouters from "./configs/routers.config";
import "../src/css/style.scss";

import configStore from "./state/store/configureStore";

const store = configStore();

function App(props) {
  return (
    <Provider store={store}>
      <AppRouters />
    </Provider>
  );
}

export default App;
