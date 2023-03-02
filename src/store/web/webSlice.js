import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  url: "",
  errorMessage: undefined,
  imagesDefault: [],
  imagesOptimized: [],
};

export const webSlice = createSlice({
  name: "web",
  initialState: initialState,
  reducers: {
    onAnalysing: (state, { payload }) => {
      state.status = "analysing";
      state.url = payload;
    },
    onReadyImagesDefault: (state, { payload }) => {
      state.status = "analyzed";
      state.imagesDefault = payload.imagesDefault;
    },
    onOptimizing: (state) => {
      state.status = "optimizing";
    },
    onReadyImagesOptimized: (state, { payload }) => {
      state.status = "optimized";
      state.imagesOptimized = payload;
    },
    onError: (state, { payload }) => {
      console.log(payload);
      state.status = "error";
      state.errorMessage = payload.error;
    },
    onReset: () => initialState,
  },
});

export const {
  onAnalysing,
  onReadyImagesDefault,
  onOptimizing,
  onReadyImagesOptimized,
  onError,
  onReset,
} = webSlice.actions;
