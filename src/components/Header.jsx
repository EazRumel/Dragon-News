import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
     <div className='flex flex-col justify-center items-center gap-2'>
        <img className='w-[350px] py-5' src={logo} alt="" />
        <h2 className='text-gray-300'>Journalism Without Fear or Favour</h2>
     </div>
    </div>
  );
};

export default Header;