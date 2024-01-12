import React from "react";
import Nav from "../components/Navbar/Nav";
import { ScrollRestoration, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-screen  min-h-screen flex flex-col overflow-x-hidden">
      <Nav />
      <ScrollRestoration />
      <main className="mt-[5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
