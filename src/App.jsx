import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Privacy from './components/Privacy'
import Refund from './Refund'
import Shipping from './Shipping'
import Term from './Term'
import Collection from './Collection'
import Productdetail from './Productdetail'
import Cart from './Cart'
import Buy from './Buy'
import Contact from './Contact'
import Layout from './Layout'
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
