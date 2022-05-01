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
  increment,
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
  let cardItems = [];
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
      itemList.push({ id: i.id, ...i.data() });
    });
    return itemList;
  };
  const getWorkers = async () => {
    const q = query(
      collection(database, "users"),
      where("role", "==", "pracownik")
    );
    const workers = await getDocs(q);
    const workersList = [];
    const data = workers.forEach((i) => {
      const singleData = { id: i.id, ...i.data() };
      workersList.push(singleData);
    });
    return workersList;
  };
  const addProduct = async (product) => {
    const { name, count, price, category } = product;
    const ref = await addDoc(collection(database, category), {
      count,
      name,
      price,
    });
    return ref;
  };
  const addWorker = async (worker) => {
    const { email, password, role, name, sname } = worker;
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(database, "users"), { email, name, role, sname });
    return user;
  };
  const addItemToObject = (items) => {
    let itm;
    cardItems.forEach((i) => {
      if (i.id === items.id) {
        itm = true;
      }
    });
    if (itm != true) cardItems.push(items);
  };
  const getItemsList = () => {
    let items = [];
    cardItems.forEach((i) => {
      const singleData = {
        id: i.id,
        name: i.name,
        price: i.price,
        itemcount: i.itemcount,
      };
      items.push(singleData);
    });
    cardItems = items;
    return cardItems;
  };
  const setItemCount = (id, val) => {
    let items = [];
    cardItems.forEach((i) => {
      if (i.id === id) {
        i.itemcount = val;
      }
    });
  };
  const removeItemFromList = (arr) => {
    cardItems = arr;
  };

  const updateItemsListInDatabase = (items) => {
    items.forEach((i) => {});
  };
  return (
    <AppProvider.Provider
      value={{
        loginUser,
        logOut,
        getUserObject,
        getItems,
        getWorkers,
        addProduct,
        addWorker,
        setUser,
        addItemToObject,
        getItemsList,
        removeItemFromList,
        setItemCount,
        updateItemsListInDatabase,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
}

export const useConfig = () => useContext(AppProvider);
