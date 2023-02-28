import React from "react";
import { Routes, Route } from "react-router-dom";
import DemoPage from "../pages/DemoPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="*" element={<DemoPage />} />
    </Routes>
  );
};

export default AppRouter;
