import { useContext, createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";

import { auth, db } from "../utility/firebase";
import { useRouter } from "next/router";
import { doc, getDoc, setDoc, collection, set } from "firebase/firestore";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(user?.displayName);
  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithRedirect(auth, new GoogleAuthProvider());
      console.log(data);
      setIsLoggedIn(true);
      return onAuthStateChanged(auth, (user) => {
        if (user == null) {
          console.log("Error hai bhai");
        }
      });
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
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
        // console.log("Document data:", CDSnap.data());
        setUser(CDSnap.data());
      } else {
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
      console.log(currentUser);
      userRegistration(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ handleGoogleSignIn, user, logout, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
