import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import Auth from "./Pages/Auth";
function App() {
  return (
    <Routes>
      <Route path="/Authorization" element={<Auth />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
