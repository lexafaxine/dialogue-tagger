/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import App from "App";
import configureStore from "store/configureStore";

import React from "react";
import ReactDOM from "react-dom";
// Material Dashboard 2 React Context Provider
// import { MaterialUIControllerProvider } from "context";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      {/* <MaterialUIControllerProvider> */}
      <App />
      {/* </MaterialUIControllerProvider> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
