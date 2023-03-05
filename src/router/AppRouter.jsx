import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import ContactPage from "../pages/ContactPage";
import DemoPage from "../pages/DemoPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
