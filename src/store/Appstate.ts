import { combineReducers } from "@reduxjs/toolkit";
import { MaterialReducer } from "context/MaterialReducer";
import { MissionsReducer } from "./MissionsReducer";

export const rootReducer = combineReducers({
    "missions": MissionsReducer,
    "material": MaterialReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
