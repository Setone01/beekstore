import { configureStore } from "@reduxjs/toolkit";
import beekstoreReducer from "./beekstoreSlice";

export const store = configureStore({
  reducer: {
    beekstore: beekstoreReducer,
  },
});
