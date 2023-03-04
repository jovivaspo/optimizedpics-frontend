import React from "react";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import Gallery from "../components/Gallery";
import Loader from "../components/Loader";

const DemoPage = () => {
  const { status, url, errorMessage, imagesDefault, imagesOptimized } =
    useSelector((state) => state.web);
  return (
    <div>
      <Form />
      {status === "analysing" && <Loader />}
      {imagesDefault.length > 0 && (
        <Gallery imagesDefault={imagesDefault} url={url} />
      )}
    </div>
  );
};

export default DemoPage;
