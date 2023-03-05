import { useDispatch } from "react-redux";
import { connectionApi } from "../api/connectionApi";
import {
  onAnalysing,
  onOptimizing,
  onError,
  onReadyImagesDefault,
  onReadyImagesOptimized,
  onReset,
  onResetError,
} from "../store/web/webSlice";

export const useWebStore = () => {
  const dispatch = useDispatch();

  const startAnalyse = async ({ url }) => {
    dispatch(onAnalysing(url));
    try {
      const data = await connectionApi.post("/analyse", { body: { url } });

      if (data.error) {
        dispatch(onError({ error: data.error }));
        return setTimeout(() => {
          dispatch(onReset());
        }, 3000);
      }

      const { imagesDefault } = data;

      setTimeout(() => {
        dispatch(onReadyImagesDefault({ imagesDefault }));
        localStorage.setItem("url", JSON.stringify(url));
        localStorage.setItem("imagesDefault", JSON.stringify(imagesDefault));
      }, 1500);
    } catch (error) {
      dispatch(onError({ error: "Ups, algo salió mal..." }));
      setTimeout(() => {
        dispatch(onReset());
      }, 4000);
    }
  };

  const startOptimizing = async ({ images }) => {
    dispatch(onOptimizing({ imagesOptimizing: images }));

    try {
      const data = await connectionApi.post("/optimize", {
        body: { images },
      });

      if (data.error) {
        dispatch(onError({ error: data.error }));
        return setTimeout(() => {
          dispatch(onResetError());
        }, 2500);
      }
      const { imagesOptimized } = data;

      setTimeout(() => {
        dispatch(onReadyImagesOptimized({ imagesOptimized }));
        let snapshotImagesOptimized = localStorage.getItem("imagesOptimized")
          ? JSON.parse(localStorage.getItem("imagesOptimized"))
          : [];
        snapshotImagesOptimized = [
          ...snapshotImagesOptimized,
          ...imagesOptimized,
        ];
        localStorage.setItem(
          "imagesOptimized",
          JSON.stringify(snapshotImagesOptimized)
        );
      }, 1500);
    } catch (error) {
      dispatch(onError({ error: "Ups, algo salió mal..." }));
      return setTimeout(() => {
        dispatch(onResetError());
      }, 2500);
    }
  };

  return { startAnalyse, startOptimizing };
};
