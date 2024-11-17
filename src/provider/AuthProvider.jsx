import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebaseConfig';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  console.log(user)
  const createNewUser = (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    return signOut(auth)
   }
  const authInfo = {
    user,
    createNewUser,
    setUser,
    logOut,
    loginUser
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(createUser =>{
      setUser(createUser)
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