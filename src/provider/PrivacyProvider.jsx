import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivacyProvider = ({children}) => {
   const location = useLocation()
   console.log(location)
   const {user , loading} = useContext(AuthContext)
   if(loading){
   return <Loading></Loading>
   }
   if(user && user?.email){
    return children
   }
   else{
    return <Navigate state={location.pathname} to ={"/auth/login"}></Navigate>
   }
  return (
    <div>
      
    </div>
  );
};

export default PrivacyProvider;