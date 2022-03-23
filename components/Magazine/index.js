import { createDrawerNavigator } from "@react-navigation/drawer";

import MagazinComponent from "./MagazinComponent";

const Drawer = createDrawerNavigator();

const MagazinDrawer = () => {
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
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MagazinDrawer;
