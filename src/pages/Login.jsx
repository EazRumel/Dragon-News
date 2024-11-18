import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [errored,setErrored] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const {loginUser} = useContext(AuthContext)
  const handleLogin = (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const email = form.get("email")
  const password = form.get("password");
  console.log({email,password})
  loginUser(email,password)
  .then((result)=> {
    const loginInfo = result.user
    console.log(loginInfo)
    navigate(location?.state ? location.state : "/")
  })
  .catch((error)=> {
    console.log(error.message)
    setErrored({...errored,login: error.code})
  })
  }
  return (
    <div className='min-h-screen flex justify-center items-center  bg-[#FFFFFF]'>
      <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 ">
      <h1 className='font-bold text-center text-3xl'>Login With Your Account</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          {
            errored.login && <label className="text-sm text-red-500">{errored.login}</label>
          }
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>
      <p className='text-center'>Don't Have An Account?<Link className='text-red-500 ml-2' to="/auth/register">Register</Link></p>
    </div>
    </div>
  );
};

export default Login;