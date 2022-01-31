import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { ThemeContext } from "../App";
import { addCard } from "../Server/query";
const HomePage = () => {
  const { data } = useContext(ThemeContext);
  const a  = () => {
    console.log(data)
    addCard({ name: "Aram" })
  }
  if ("yes" !== localStorage.getItem("Auth")) return <Navigate />;
  return (
    <>
      <Button onClick={a}>ADD Card</Button>
      <h2>Welcome to Main page</h2>
    </>
  );
};

export default HomePage;
