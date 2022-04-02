import { combineReducers } from "@reduxjs/toolkit";
import { MaterialReducer } from "context/MaterialReducer";
import measuresReducer from "./measure";
import datasetReducer from "./dataset";
import taskReducer from "./task"

export const rootReducer = combineReducers({
  material: MaterialReducer,

  measures: measuresReducer,
  datasets: datasetReducer,
  tasks: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
