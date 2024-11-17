import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
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
  })
  .catch((error)=> {
    console.log(error.message)
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