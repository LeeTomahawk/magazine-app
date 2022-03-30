import React, { useState } from "react";
import {
  Text,
  HStack,
  Center,
  Heading,
  VStack,
  Input,
  FormControl,
  Button,
  Box,
  Image,
} from "native-base";
import { useConfig } from "../../Config/GlobalContext";

const LoginComponent = ({ navigation }) => {
  const [logInData, setLogInData] = useState({ login: "", password: "" });
  const { loginUser, user } = useConfig();
  const handleLogin = async (email, pass) => {
    try {
      await loginUser(email, pass);
      navigation.navigate("Home");
    } catch (exc) {
      throw exc;
    }
  };
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={0} flex={1} w="100%">
        <Image
          alt="Logo"
          w="150px"
          h="150px"
          source={require("../../assets/logo.png")}
        />
        <Text letterSpacing="3" fontSize="20" color="#fff" fontWeight="800">
          Magazyn
        </Text>
        <Box
          borderColor={"gray.700"}
          borderWidth="1"
          py="2"
          mt="2"
          w="100%"
          bg={"#1a1919"}
        ></Box>
        <Box safeArea p="2" py="4" w="90%" maxW="290" minH={"1/2"}>
          <Heading size="lg" fontWeight="600" color="#ffffff">
            Witaj
          </Heading>
          <Heading mt="1" color="#c5c5c5" fontWeight="medium" size="xs">
            Zaloguj się do aplikacji!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label color="#fff">
                <Text color="#fff">Email</Text>
              </FormControl.Label>
              <Input
                color="#fff"
                placeholder="email"
                _hover={{
                  bg: "#131313",
                }}
                _focus={{
                  borderColor: "#9442bd",
                }}
                onChangeText={(value) =>
                  setLogInData({ ...logInData, login: value })
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text color="#fff">Hasło</Text>
              </FormControl.Label>
              <Input
                color="#fff"
                type="password"
                placeholder="hasło"
                _hover={{
                  bg: "#131313",
                }}
                _focus={{
                  borderColor: "#9442bd",
                }}
                onChangeText={(value) =>
                  setLogInData({ ...logInData, password: value })
                }
              />
            </FormControl>
            <HStack justifyContent="center">
              <Button
                w={150}
                mt="5"
                bg="#8442bd"
                borderRadius="full"
                onPress={() => {
                  handleLogin(logInData.login, logInData.password);
                }}
                _hover={{
                  bg: "#9442bd",
                }}
                _pressed={{
                  bg: "#9442bd",
                }}
                _focus={{
                  bg: "#9442bd",
                }}
              >
                Zaloguj się
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box
          borderColor={"gray.700"}
          borderWidth="1"
          py="2"
          mt="2"
          w="100%"
          bg={"#1a1919"}
        ></Box>
      </Center>
    </Box>
  );
};
export default LoginComponent;
