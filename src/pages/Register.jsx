import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const navigate = useNavigate()
  const [errored,setErrored] = useState({})
  
  const {createNewUser , setUser , updateUserProfile } = useContext(AuthContext);
  const handleRegister = (event) => {
      event.preventDefault();
      // const name = event.target.name.value
      // const email = event.target.email.value
      // const photo = event.target.photo.value
      // const password = event.target.password.value
      // console.log(name,email,photo,password); conventionally i used to do so
    //new way to do the same process
    const form = new FormData(event.target)
    const name = form.get("name")
    if(name.length < 4){
      setErrored({...errored, name:'name must be at least 4 character long'})
      return;
    }
    const email = form.get("email")
    const photoUrl = form.get("photo")
    const password = form.get("password")
    console.log({name,email,photoUrl,password}); 
    //it's an alternate way to get data from a form
    createNewUser(email,password)
    .then((result) => {
      const user = result.user
      setUser(user)
      console.log(user)
      updateUserProfile({displayName:name,photoURL:photoUrl})
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message)
      })
    })
    .catch((error) => {
      console.log(error.message)
    }) 
  }
  return (
    <div className='min-h-screen flex justify-center items-center  bg-[#FFFFFF]'>
    <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 ">
    <h1 className='font-bold text-center text-3xl'>Register A New Account</h1>
    <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
       {
        errored.name && (<label className='text-red-500 text-sm'>
          {errored.name}
        </label>)
       }
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
      </div>
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
        <button className="btn btn-neutral rounded-none">Register</button>
      </div>
    </form>
    <p className='text-center'>Already Have An Account?<Link className='text-green-500 ml-2' to="/auth/login">Login</Link></p>
  </div>
  </div>
  );
};

export default Register;