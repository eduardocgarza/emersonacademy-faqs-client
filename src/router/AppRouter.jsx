import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlueprintWrapper from "../components/blueprints/BlueprintWrapper";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlueprintWrapper />}>
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
