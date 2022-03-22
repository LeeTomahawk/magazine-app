import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen/HomeScreen";
import Magazin from "../Magazine";
import Workers from "../Workers";
import MagazineManagement from "../MagazineManagement";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
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
        name="Magazin"
        component={Magazin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Workers"
        component={Workers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Management"
        component={MagazineManagement}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Home;
