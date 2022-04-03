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
import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Material Dashboard 2 React Context Provider
// import { MaterialUIControllerProvider } from "context";
import { BrowserRouter } from "react-router-dom";
import configureStore from "store/configureStore";

import App from "App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      {/* <MaterialUIControllerProvider> */}
      <App />
      {/* </MaterialUIControllerProvider> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
