import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginComponent from "./LoginComponent";
import HomeScreen from "../HomeScreen/HomeScreen";
import Magazin from "../Magazine";
import MagazinComponent from "../Magazine/MagazinComponent";
import Home from "../HomeScreen";

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
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Login;
