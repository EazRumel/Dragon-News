import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div className='mt-5'>
    <h2>Login With</h2>
       <div className='flex flex-col'>
       <button className='btn bg-base-100'><FaGoogle></FaGoogle>Login With Google</button>
       <button className='btn bg-base-100'><FaGithub></FaGithub>Login With GitHub</button>
       </div> 
    </div>
  );
};

export default LoginWith;