import { useContext, createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";
import Cookies from "js-cookie";
import { auth, db } from "../utility/firebase";
import { useRouter } from "next/router";
import { doc, getDoc, setDoc, collection, set } from "firebase/firestore";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({});
 
  const currentDate = new Date();
  const expires = new Date(
    currentDate.getFullYear() + 10,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const [isLoggedIn, setIsLoggedIn] = useState(user?.displayName);
  // Cookies.set("isFirstLoggedIn", "false", { expires: expires });
  const handleGoogleSignIn = async () => {
   
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
      
    }
  
  };
  const logout = async () => {
    console.log("LOGGING OUT");
    await router.replace("/");
    await signOut(auth);
    setIsLoggedIn(false);
    setUser({});
  };

  const userRegistration = async (googleUser) => {
    if (user?.name) return;
    if (googleUser?.displayName) {
      const CDref = doc(db, "campus directors", googleUser.uid);
      const CDSnap = await getDoc(CDref);
      if (CDSnap.exists()) {
        setUser(CDSnap.data());
        Cookies.set("isFirstLoggedIn", "false", { expires: expires });
      } else {
        Cookies.set("isFirstLoggedIn", "true", { expires: expires });
        const newUser = {
          id: googleUser.uid,
          referral_code:
            googleUser.uid.slice(0, 4).toLowerCase() +
            Date.now().toString().substring(9),
          name: googleUser.displayName,
          email: googleUser.email,
          avatar: googleUser.photoURL,
          time: Date.now(),
          registrations: [],
        };
        await setDoc(doc(db, "campus directors", newUser.id), newUser);
        setUser(newUser);
        console.log("No such document!");
      }
    }
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      userRegistration(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        handleGoogleSignIn,
        user,
        logout,
        isLoggedIn,
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
