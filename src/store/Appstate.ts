import { combineReducers } from "@reduxjs/toolkit";
import { MaterialReducer } from "context/MaterialReducer";
import { MeasureListReducer } from "./MeasureListReducer";
import { MissionsReducer } from "./MissionsReducer";

export const rootReducer = combineReducers({
    "missions": MissionsReducer,
    "material": MaterialReducer,
    "measureList": MeasureListReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
