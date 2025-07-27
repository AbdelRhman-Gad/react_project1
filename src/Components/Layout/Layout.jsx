import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Info />
      <Footer />
    </>
  );
}
