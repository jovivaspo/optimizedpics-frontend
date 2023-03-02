import { useDispatch, useSelector } from "react-redux";
import { connectionApi } from "../api/connectionApi";
import {
  onAnalysing,
  onError,
  onReadyImagesDefault,
  onReset,
} from "../store/web/webSlice";

export const useWebStore = () => {
  const { status, url, errorMessage, imagesDefault, imagesOptimized } =
    useSelector((state) => state.web);
  const dispatch = useDispatch();

  const startAnalyse = async ({ url }) => {
    dispatch(onAnalysing(url));
    try {
      const data = await connectionApi.post("/analyse", { body: { url } });
      console.log(data);
      const { imagesDefault } = data;
      if (data.error) {
        return dispatch(onError({ error: data.error }));
      }

      dispatch(onReadyImagesDefault({ imagesDefault }));
    } catch (error) {
      dispatch(onError({ message: "Ups, algo salió mal..." }));
      setTimeout(() => {
        dispatch(onReset());
      }, 4000);
    }
  };

  return { startAnalyse };
};
