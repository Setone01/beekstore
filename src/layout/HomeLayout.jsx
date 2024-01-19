import React from "react";
import Nav from "../components/Navbar/Nav";
import { ScrollRestoration, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-screen  min-h-screen flex flex-col">
      <Nav />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
