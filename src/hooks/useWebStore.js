import { useDispatch, useSelector } from "react-redux";
import { connectionApi } from "../api/connectionApi";
import {
  onAnalysing,
  onOptimizing,
  onError,
  onReadyImagesDefault,
  onReadyImagesOptimized,
  onReset,
} from "../store/web/webSlice";

export const useWebStore = () => {
  const web = useSelector((state) => state.web);
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
      dispatch(onError({ message: "Ups, algo salió mal..." }));
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
          dispatch(onReset());
        }, 3000);
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
      dispatch(onError({ message: "Ups, algo salió mal..." }));
      setTimeout(() => {
        dispatch(onReset());
      }, 4000);
    }
  };

  return { startAnalyse, startOptimizing };
};
