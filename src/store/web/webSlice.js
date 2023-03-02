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
    onTimeLoad: (state, { payload }) => {
      const image = state.imagesDefault.find(
        (el) => el.image === payload.image
      );

      if (image) {
        const imageUpdated = { ...image, timeLoad: payload.timeLoad };

        const index = state.imagesDefault.findIndex(
          (el) => el.image === payload.image
        );

        state.imagesDefault[index] = imageUpdated;
      }
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
  onTimeLoad,
  onOptimizing,
  onReadyImagesOptimized,
  onError,
  onReset,
} = webSlice.actions;
