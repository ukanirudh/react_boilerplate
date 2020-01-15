import React from "react";
import { Provider } from "react-redux";
import App from "../home-page/homePageRoutes";
import setupStore from "./store";

const TradingApp = () => (
  <Provider store={setupStore()}>
    <App />
  </Provider>
);

export default TradingApp;
