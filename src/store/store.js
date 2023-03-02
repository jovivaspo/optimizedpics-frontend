import { configureStore } from "@reduxjs/toolkit";
import { webSlice } from "./web/webSlice";

export const Store = configureStore({
  reducer: {
    web: webSlice.reducer,
  },
});
