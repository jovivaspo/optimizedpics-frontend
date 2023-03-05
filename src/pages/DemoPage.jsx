import React from "react";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import Gallery from "../components/Gallery";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

const DemoPage = () => {
  const { status, url, errorMessage, imagesDefault, imagesOptimized } =
    useSelector((state) => state.web);

  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}
      >
        Prueba nuestra Demo
      </h1>
      <Form />
      {status === "analysing" && <Loader />}
      {imagesDefault.length > 0 && (
        <Gallery imagesDefault={imagesDefault} url={url} />
      )}
      {<Alert errorMessage={errorMessage} />}
    </div>
  );
};

export default DemoPage;
