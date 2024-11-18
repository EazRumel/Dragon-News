import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebaseConfig';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
 
  const [loading,setLoading] = useState(true);
  console.log(user,loading)
  const createNewUser = (email,password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
   }
   const updateUserProfile = (updatedUser) => {
     return updateProfile(auth.currentUser,updatedUser)
   }
  const authInfo = {
    user,
    createNewUser,
    setUser,
    logOut,
    loginUser,
    loading,
    updateUserProfile
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(createUser =>{
      setUser(createUser)
      setLoading(false)
    }))
    return () => {
      unsubscribe()
    }
  },[])
  
  return (
    <div>
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;