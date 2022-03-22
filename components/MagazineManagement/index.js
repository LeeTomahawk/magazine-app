import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MagazinComponent from "../Magazine/MagazinComponent";
import ManagementComponent from "./ManagementComponent";

const Stack = createNativeStackNavigator();

const MagazineManagement = () => {
  return (
    <Stack.Navigator>
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
export default MagazineManagement;
