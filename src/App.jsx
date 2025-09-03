import { useState } from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Refund from './Refund'
import Shipping from './Shipping'
import Term from './Term'
import Collection from './Collection'
import Productdetail from './Productdetail'
import Cart from './Cart'
import Buy from './Buy'
import Contact from './Contact'

import { Toaster } from 'react-hot-toast';

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/><Footer/></>
    },
    {
      path:'/privacy',
      element:<><Navbar/><Privacy/><Footer/></>
    },
    {
      path:'/refund',
      element:<><Navbar/><Refund/><Footer/></>
    },
    {
      path:'/shipping',
      element:<><Navbar/><Shipping/><Footer/></>
    },
    {
      path:'/term',
      element:<><Navbar/><Term/><Footer/></>
    },
    {
      path:'/collection',
      element:<><Navbar/><Collection/><Footer/></>
    },
    {
      path:'/productdetail/:id',
      element:<><Navbar/><Productdetail/><Footer/></>
    },
    {
      path:'/cart',
      element:<><Navbar/><Cart/><Footer/></>
    },
    {
      path:'/Buy',
      element:<><Navbar/><Buy/><Footer/></>
    },
      {
      path:'/contact',
      element:<><Navbar/><Contact/><Footer/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
     
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
