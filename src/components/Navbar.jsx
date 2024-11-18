import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user , logOut} = useContext(AuthContext)
  return (
    <div className='flex justify-between'>
      <div></div>
      <div className='nav space-x-5'>
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className='login flex gap-2 items-center'>
      {
        user && user?.email ? <div>
        <img className='w-10 rounded-full'  src={user?.photoURL} alt="" />
        <p>{user.displayName}</p>
        </div> : <img src={userImg} alt="" />
      }
          {
          user && user.email ?   <button className='btn btn-neutral rounded-none' onClick= 
              {logOut}>LogOut</button> : <Link to="/auth/login" 
              className='btn btn-neutral rounded-none'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;