import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home';
import Header from './components/Header';




const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'header',
    element:<Header></Header>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
