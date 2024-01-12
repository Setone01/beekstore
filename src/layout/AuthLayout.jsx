import React from "react";
import Login from "../auth/Login";
import Nav from "../components/Navbar/Nav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
