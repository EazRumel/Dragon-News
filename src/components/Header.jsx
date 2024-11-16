import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div>
     <div className='flex flex-col justify-center items-center gap-2'>
        <img className='w-[350px] py-5' src={logo} alt="" />
        <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
     </div>
    </div>
  );
};

export default Header;