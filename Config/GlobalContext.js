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
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [user, setUser] = useState({});
  const loginUser = async (email, password) => {
    const userc = await signInWithEmailAndPassword(auth, email, password);
    const userr = await getUser(email);
    setUser({ ...userc, external: userr });
  };
  const logOut = async () => {
    await signOut(auth);
    setUser({});
  };
  const getUser = async (email) => {
    const q = query(collection(database, "users"), where("email", "==", email));
    const user = await getDocs(q);
    const ar = [];
    const data = user.forEach((da) => {
      const singleData = { id: da.id, ...da.data() };
      ar.push(singleData);
    });
    return ar[0];
  };
  const getUserObject = () => {
    return user.external;
  };
  const getItems = async (category) => {
    const q = query(collection(database, category));
    const items = await getDocs(q);
    const itemList = [];
    const data = items.forEach((i) => {
      const singleData = { ...i.data() };
      itemList.push(singleData);
    });
    return itemList;
  };
  return (
    <AppProvider.Provider
      value={{ loginUser, logOut, getUserObject, getItems }}
    >
      {children}
    </AppProvider.Provider>
  );
}

export const useConfig = () => useContext(AppProvider);
