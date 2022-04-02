import { combineReducers } from "@reduxjs/toolkit";
import { MaterialReducer } from "context/materialReducer";

import datasetReducer from "./dataset";
import measuresReducer from "./measure";
import taskReducer from "./task";

export const rootReducer = combineReducers({
  material: MaterialReducer,

  measures: measuresReducer,
  datasets: datasetReducer,
  tasks: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
