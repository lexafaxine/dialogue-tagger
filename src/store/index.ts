import { combineReducers } from "@reduxjs/toolkit";
import { MaterialReducer } from "context/MaterialReducer";
import measuresReducer from "./measureSlice";
import { MissionsReducer } from "./MissionsReducer";
import datasetReducer from "./datasetSlice";

export const rootReducer = combineReducers({
  material: MaterialReducer,

  missions: MissionsReducer,
  measures: measuresReducer,
  datasets: datasetReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
