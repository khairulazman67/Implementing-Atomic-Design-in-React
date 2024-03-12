import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/error.jsx'
import ProductPage from './pages/product.jsx'
import ProfilePage from './pages/profile.jsx'
import DetailProduct from './pages/detailProduct';

const router = createBrowserRouter([
  {
    path          : "/",
    element       : <div>Hello World</div>,
    errorElement  : <ErrorPage/>
  },
  {
    path : "/login",
    element : <LoginPage/>
  },
  {
    path : "/register",
    element : <RegisterPage/>
  },
  {
    path : "/products",
    element : <ProductPage/>
  },
  {
    path  : "/products/:id",
    element : <DetailProduct/>
  },
  {
    path : "/profile",
    element : <ProfilePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
