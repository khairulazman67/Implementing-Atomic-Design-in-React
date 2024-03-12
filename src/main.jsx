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
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Navbar from './components/layouts/Navbar.jsx'

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
    <Provider store={store}>
      <Navbar/>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
