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
import Login from "./components/Login";

export default function App({ navigation }) {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
