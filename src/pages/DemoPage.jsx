import React from "react";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import Gallery from "../components/Gallery";

const DemoPage = () => {
  const { status, url, errorMessage, imagesDefault, imagesOptimized } =
    useSelector((state) => state.web);
  return (
    <div>
      <Form />
      <p style={{ textAlign: "center" }}>{status}</p>
      {imagesDefault.length > 0 && <Gallery imagesDefault={imagesDefault} />}
    </div>
  );
};

export default DemoPage;
