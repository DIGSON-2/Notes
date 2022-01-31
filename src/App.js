import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import Auth from "./Pages/Auth";
import api from "./api/users"

function App() {
  const [isAuth , setIsAuth ] = useState(false)
  const [users, setUsers ] = useState([])

  const retrieveUsers = async () => {
    const response = await api.get("/users")
    return response.data;
  }
  useEffect(() =>{
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if(allUsers) setUsers(allUsers)
      }
      getAllUsers();
      console.log(users)
  },[])
  const toggleAuth = () => {
    setIsAuth((prev) => (prev ? false : true))
  }
  const addUser = async (user) =>{
    const request = user
    const response = await api.post("/users", request)
    setUsers((prev) => [...prev, response.data])
  }
  return (
    <ThemeContext.Provider value={{isAuth,toggleAuth,users,addUser}}>
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
