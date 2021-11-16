import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "store/cryptoApi";
import { cryptoNewsApi } from "store/cryptoNewsApi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
