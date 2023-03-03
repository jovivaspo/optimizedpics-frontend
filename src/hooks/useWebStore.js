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
      console.log(data);
      const { imagesDefault } = data;
      if (data.error) {
        dispatch(onError({ error: data.error }));
        return setTimeout(() => {
          dispatch(onReset());
        }, 3000);
      }

      dispatch(onReadyImagesDefault({ imagesDefault }));
      localStorage.setItem("url", JSON.stringify(url));
      localStorage.setItem("imagesDefault", JSON.stringify(imagesDefault));
    } catch (error) {
      dispatch(onError({ message: "Ups, algo salió mal..." }));
      setTimeout(() => {
        dispatch(onReset());
      }, 4000);
    }
  };

  const startOptimizing = async ({ images }) => {
    dispatch(onOptimizing());
    try {
      const data = await connectionApi.post("/optimize", {
        body: { images },
      });
      console.log(data);

      if (data.error) {
        return dispatch(onError({ error: data.error }));
      }
      const imagesOptimized = { data };
      dispatch(onReadyImagesOptimized({ imagesOptimized }));
      localStorage.setItem("imagesOptimized", JSON.stringify(imagesOptimized));
    } catch (error) {
      dispatch(onError({ message: "Ups, algo salió mal..." }));
      setTimeout(() => {
        dispatch(onReset());
      }, 4000);
    }
  };

  return { startAnalyse, startOptimizing };
};
