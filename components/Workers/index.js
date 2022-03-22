import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen/HomeScreen";
import Magazin from "../Magazine";
import WorkersComponent from "../Workers/WorkersComponent";

const Stack = createNativeStackNavigator();

const Workers = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};
export default Workers;
