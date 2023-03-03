import fire from "../assets/fire.svg";
import happy from "../assets/happy.svg";
import bad from "../assets/bad.svg";

export const evaluationformat = {
  svg: fire,
  webp: fire,
  avif: fire,
  png: happy,
  jpg: happy,
  jpeg: happy,
  gif: happy,
  ico: happy,
  psd: bad,
  bmp: bad,
  tiff: bad,
};

export const evaluationSize = (size) => {
  if (size < 50) return fire;
  if (size > 51 && size < 150) return happy;
  return bad;
};

export const evaluationTime = (time) => {};
