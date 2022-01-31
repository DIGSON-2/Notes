import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ThemeContext } from "../App";
const  HomePage = () => {
  const {isAuth,users} = useContext(ThemeContext)
  if(!isAuth) return <Navigate to='/Authorization'/>
  return (
    <>
      <h2>Welcome to Main page</h2>
    </>
  );
}

export default HomePage;
