import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home';
import Header from './components/Header';
import CategoryNews from './pages/CategoryNews';
import AuthLayout from './layouts/AuthLayout';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
      path:"",
      element:<Navigate to={"/category/01"}></Navigate>
    },
    {
      path:"/category/:id",
      element:<CategoryNews></CategoryNews>,
    loader:({params}) =>
     fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
    }
  ]
  },
  {
    path:'header',
    element:<Header></Header>
  },
  {
    path:'auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
         path:'/auth/login',
         element:<h2>Login Page</h2>
    },
    {
      path:'/auth/register',
      element:<h1>Do register please</h1>
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
