import { configureStore } from "@reduxjs/toolkit";
import prepstoreReducer from "./prepstoreSlice";

export const store = configureStore({
  reducer: {
    prepstore: prepstoreReducer,
  },
});
