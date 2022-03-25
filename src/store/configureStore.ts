import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./index";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  // const store = createStore(persistedReducer);
  // const persistor = persistStore(store);
  // return { ...store, persistor };
  return createStore(rootReducer, {});
};

export default configureStore;
