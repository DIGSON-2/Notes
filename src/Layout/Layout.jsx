import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footerComponent/Footer";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

const Layout = () => {
  const navigation = useNavigate()

  return (
    <>
      <header>
        <Button onClick={()=> navigation('/')}>Go first page </Button>
      </header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
