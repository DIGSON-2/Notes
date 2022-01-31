import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import Auth from "./Pages/Auth";
import { getData } from "./Server/query";

function App() {
  const [data, setData] = useState("");

  useEffect(()=>{
    getData(setData)
  },[])


  return (
    <ThemeContext.Provider value={{ data }}>
      <Routes>
        <Route path="/Authorization" element={<Auth />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}
export const ThemeContext = React.createContext();
export default App;
