import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Scrolltop from "./components/Scrolltop";
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