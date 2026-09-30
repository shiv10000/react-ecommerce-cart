import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path : "" ,
        element : <Home/>
      },
      {
        path : "cart" ,
        element : <Cart/>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
