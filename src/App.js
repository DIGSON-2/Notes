import React, {useState} from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import Auth from "./Pages/Auth";

function App() {
  const [isAuth , setIsAuth ] = useState(false)

  const toggleAuth = () => {
    setIsAuth((prev) => (prev ? false : true))
  }
  return (
    <ThemeContext.Provider value={{isAuth,toggleAuth}}>
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
