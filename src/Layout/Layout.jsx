import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footerComponent/Footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
