import React from "react";
import Nav from "../components/Navbar/Nav";
import { ScrollRestoration, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-screen  min-h-screen flex flex-col">
      <Nav />
      <ScrollRestoration />
      <main className="mt-[4.2rem] top-0 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
