import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginComponent from "./LoginComponent";
import HomeScreen from "../HomeScreen/HomeScreen";
import CardComponent from "../Magazine/CardComponent";
import MagazinDrawer from "../Magazine";
import WorkersComponent from "../Workers/WorkersComponent";
import ManagementComponent from "../MagazineManagement/ManagementComponent";
import AddWorkerComponent from "../Workers/AddWorkerComponent";

const Stack = createNativeStackNavigator();

const Login = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginComponent}
        options={{
          headerShown: false,
          headerBackButtonMenuEnabled: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerBackVisible: false,
          title: "Strona główna",
          headerStyle: {
            backgroundColor: "#6546d7",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#c5c5c5",
          },
        }}
      />
      <Stack.Screen
        name="MagazinDrawer"
        component={MagazinDrawer}
        options={{
          headerShown: true,
          headerBackVisible: true,
          title: "Magazyn",
          headerStyle: {
            backgroundColor: "#6546d7",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#c5c5c5",
          },
        }}
      />
      <Stack.Screen
        name="Card"
        component={CardComponent}
        options={{
          headerShown: true,
          headerBackVisible: true,
          title: "Karta",
          headerStyle: {
            backgroundColor: "#6546d7",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#c5c5c5",
          },
        }}
      />
      <Stack.Screen
        name="Workers"
        component={WorkersComponent}
        options={{
          headerShown: true,
          title: "Pracownicy",
          headerStyle: {
            backgroundColor: "#6546d7",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#c5c5c5",
          },
        }}
      />
      <Stack.Screen
        name="AddWorker"
        component={AddWorkerComponent}
        options={{
          headerShown: true,
          title: "Dodawanie pracownika",
          headerStyle: {
            backgroundColor: "#6546d7",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#c5c5c5",
          },
        }}
      />
      <Stack.Screen
        name="Management"
        component={ManagementComponent}
        options={{
          headerShown: true,
          title: "Zarządzanie magazynem",
          headerStyle: {
            backgroundColor: "#6546d7",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#c5c5c5",
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default Login;
