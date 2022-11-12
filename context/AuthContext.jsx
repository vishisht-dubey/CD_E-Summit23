import { useContext, createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../utility/firebase";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    console.log("LOGGING OUT");
    signOut(auth);
    setUser({});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", user);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AuthContext.Provider value={{ googleSignIn, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
