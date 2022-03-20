import { combineReducers } from "@reduxjs/toolkit";
import { MaterialReducer } from "context/MaterialReducer";
import measuresReducer from "./measureSlice";
import { MissionsReducer } from "./MissionsReducer";

export const rootReducer = combineReducers({
  material: MaterialReducer,

  missions: MissionsReducer,
  measures: measuresReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
