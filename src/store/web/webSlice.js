import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  url: localStorage.getItem("url")
    ? JSON.parse(localStorage.getItem("url"))
    : "",
  errorMessage: undefined,
  imagesDefault: localStorage.getItem("imagesDefault")
    ? JSON.parse(localStorage.getItem("imagesDefault"))
    : [],
  imagesOptimizing: [],
  imagesOptimized: localStorage.getItem("imagesOptimized")
    ? JSON.parse(localStorage.getItem("imagesOptimized"))
    : [],
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
      if (payload.imageDefault) {
        const image = state.imagesDefault.find(
          (el) => el.image === payload.imageDefault
        );

        if (image) {
          const imageUpdated = { ...image, timeLoad: payload.timeLoad };

          const index = state.imagesDefault.findIndex(
            (el) => el.image === payload.imageDefault
          );

          state.imagesDefault[index] = imageUpdated;
        }
      } else {
        const { imageOptimized, timeLoad, selected } = payload;

        const image = state.imagesOptimized.find(
          (el) => el.image === imageOptimized.image
        );
        if (image) {
          const imageUpdated = { ...image, [`time-${selected}`]: timeLoad };

          const index = state.imagesOptimized.findIndex(
            (el) => el.image === imageOptimized.image
          );

          state.imagesOptimized[index] = imageUpdated;
        }
      }
    },
    onOptimizing: (state, { payload }) => {
      state.status = "optimizing";
      state.imagesOptimizing = [
        ...state.imagesOptimizing,
        ...payload.imagesOptimizing,
      ];
    },
    onReadyImagesOptimized: (state, { payload }) => {
      state.status = "optimized";
      state.imagesOptimized = [
        ...state.imagesOptimized,
        ...payload.imagesOptimized,
      ];

      state.imagesOptimized.forEach(({ image }) => {
        state.imagesOptimizing = state.imagesOptimizing.filter((img) => {
          return img.image !== image;
        });
      });
    },
    onError: (state, { payload }) => {
      console.log(payload);
      state.status = "error";
      state.errorMessage = payload.error;
    },
    onResetError: (state) => {
      state.status = null;
      state.errorMessage = undefined;
      state.imagesOptimizing = [];
    },
    onReset: (state) => {
      state.status = null;
      state.url = "";
      state.errorMessage = undefined;
      state.imagesDefault = [];
      state.imagesOptimized = [];
      state.imagesOptimizing = [];
    },
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
  onResetError,
} = webSlice.actions;
