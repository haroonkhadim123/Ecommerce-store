import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Privacy from './components/Privacy'
import Refund from './components/Refund'
import Shipping from './components/Shipping'
import Term from './components/Term'
import Collection from './components/Collection'
import Productdetail from './components/Productdetail'
import Cart from './components/Cart'
import Buy from './components/Buy'
import Contact from './components/Contact'
import Layout from './components/Layout'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,   // 👈 All pages wrapped in Layout
      children: [
        { path: '/', element: <Home /> },
        { path: '/privacy', element: <Privacy /> },
        { path: '/refund', element: <Refund /> },
        { path: '/shipping', element: <Shipping /> },
        { path: '/term', element: <Term /> },
        { path: '/collection', element: <Collection /> },
        { path: '/productdetail/:id', element: <Productdetail /> },
        { path: '/cart', element: <Cart /> },
        { path: '/buy', element: <Buy /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
