import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Input,
  Stack,
  FormControl,
  Button,
  Box,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Login from "./components/Login";
import ConfigProvider from "./Config/GlobalContext";

export default function App({ navigation }) {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ConfigProvider>
          <Login />
        </ConfigProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
