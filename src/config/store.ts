import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import * as reducers from "redux/reducers";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: { ...reducers },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
