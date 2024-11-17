import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../src/components/Navbar'

const AuthLayout = () => {
  return (
    <div className='py-3 w-11/12 mx-auto bg-[#FFFFFF]'>
       <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;