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
  const [ambassador, setAmbassador] = useState({});
  const [loading, setLoading] = useState(false);
  const currentDate = new Date();
  const expires = new Date(
    currentDate.getFullYear() + 10,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const [isLoggedIn, setIsLoggedIn] = useState(user?.displayName);
  // Cookies.set("isFirstLoggedIn", "false", { expires: expires });
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
    }
    setLoading(false);
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

  const ambassadorInfo = async (person) => {
    if (user?.email) {
      const AIref = doc(db, "campus_ambassadors_info", user.email);
      const AISnap = await getDoc(AIref);
      if (AISnap.exists()) {
        setAmbassador(AISnap.data());
        Cookies.set("ambassdInfo", JSON.stringify(AISnap.data()), {
          expires: expires,
        });
        console.log("Campus Ambassadors info exists");
      } else {
        const newUser = {
          username: person.username,
          useremail: person.useremail,
          usercontact: person.usercontact,
          userlinkedinid: person.userlinkedinid,
          userinstaid: person.userinstaid,
          userinstitutename: person.userinstitutename,
          useryearofstudy: person.useryearofstudy,
        };
        await setDoc(
          doc(db, "campus_ambassadors_info", newUser.useremail),
          newUser
        );
        Cookies.set("ambassdInfo", JSON.stringify(newUser), {
          expires: expires,
        });
        setAmbassador(newUser);
        console.log("Campus Ambassadors info does not exists");
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
        loading,
        ambassadorInfo,
        ambassador,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
