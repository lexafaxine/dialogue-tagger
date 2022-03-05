import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Appstate";

const configureStore = () => {
    return createStore(rootReducer, {});
}

export default configureStore;