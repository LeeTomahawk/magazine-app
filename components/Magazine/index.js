import { createDrawerNavigator } from "@react-navigation/drawer";
import MagazinComponent from "./MagazinComponent";

const Drawer = createDrawerNavigator();

const Magazin = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#1f1f1f",
        },
      }}
    >
      <Drawer.Screen
        name="MagazinComponent"
        component={MagazinComponent}
        options={{
          headerShown: true,
          headerBackVisible: false,
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
    </Drawer.Navigator>
  );
};

export default Magazin;
