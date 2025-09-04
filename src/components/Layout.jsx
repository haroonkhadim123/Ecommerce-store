import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer";
import Scrolltop from "./Scrolltop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <Navbar />
      <Scrolltop />   {/* 👈 Now it's inside Router context */}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout