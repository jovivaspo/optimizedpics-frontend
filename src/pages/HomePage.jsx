import React from "react";
import ContentHome from "../components/ContentHome";
import HeaderHome from "../components/HeaderHome";

const title = "OptimizedPics";

const HomePage = () => {
  return (
    <>
      <HeaderHome title={title} />
      <ContentHome />
    </>
  );
};

export default HomePage;
