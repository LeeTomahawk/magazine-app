import React, { useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  query,
  doc,
  getDocs,
  where,
  Query,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const firebaseConfig = {
  apiKey: "AIzaSyBfcTvnYCTJnPiCjPf31BdX_bx4PbIzk5U",
  authDomain: "magazine-app-2f91f.firebaseapp.com",
  databaseURL:
    "https://magazine-app-2f91f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "magazine-app-2f91f",
  storageBucket: "magazine-app-2f91f.appspot.com",
  messagingSenderId: "310854030978",
  appId: "1:310854030978:web:e5adc006b3a53e3854869b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();

const AppProvider = React.createContext({});

export default function ConfigProvider({ children }) {
  const [user, setUser] = useState();
  const [isLogged, setLogged] = useState();
  const loginUser = async (email, password) => {
    const userc = await signInWithEmailAndPassword(auth, email, password);

    const user = email;

    setUser({ ...userc, external: user });
    console.log(user);
    setLogged(true);
  };
  const logOut = async () => {
    await signOut(auth);
    setLogged(false);
    setUser({});
  };
  return (
    <AppProvider.Provider value={{ loginUser, logOut }}>
      {children}
    </AppProvider.Provider>
  );
}

export const useConfig = () => useContext(AppProvider);
