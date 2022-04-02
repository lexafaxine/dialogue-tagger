import { combineReducers } from "@reduxjs/toolkit";
import { MaterialReducer } from "context/MaterialReducer";
import measuresReducer from "./measureSlice";
import { MissionsReducer } from "./MissionsReducer";
import datasetReducer from "./datasetSlice";
import taskReducer from "./taskSlice"

export const rootReducer = combineReducers({
  material: MaterialReducer,

  missions: MissionsReducer,
  measures: measuresReducer,
  datasets: datasetReducer,
  tasks: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
