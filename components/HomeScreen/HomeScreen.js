import { Box, Text, Center, Button, Image, Icon } from "native-base";
import * as React from "react";
import { useState } from "react";
import { useConfig } from "../../Config/GlobalContext";

export default function HomeScreen({ navigation }) {
  const { logOut, getUserObject } = useConfig();
  const [user, setUser] = useState(getUserObject());
  const handleLogOut = () => {
    logOut();
    navigation.navigate("Login");
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
        <Box px="2" py="6" w="90%" maxW="290" minH={"1/2"}>
          <Button
            borderRadius="full"
            bg="#8442bd"
            m={2}
            _hover={{
              bg: "#9442bd",
            }}
            _pressed={{
              bg: "#9442bd",
            }}
            _focus={{
              bg: "#9442bd",
            }}
            onPress={() => navigation.navigate("Magazin")}
          >
            Magazyn
          </Button>
          {user.role === "admin" && (
            <Button
              borderRadius="full"
              bg="#8442bd"
              m={2}
              _hover={{
                bg: "#9442bd",
              }}
              _pressed={{
                bg: "#9442bd",
              }}
              _focus={{
                bg: "#9442bd",
              }}
              onPress={() => navigation.navigate("Workers")}
            >
              Pracownicy
            </Button>
          )}
          {user.role === "admin" && (
            <Button
              borderRadius="full"
              bg="#8442bd"
              m={2}
              _hover={{
                bg: "#9442bd",
              }}
              _pressed={{
                bg: "#9442bd",
              }}
              _focus={{
                bg: "#9442bd",
              }}
              onPress={() => navigation.navigate("Management")}
            >
              Zarządzaj magazynem
            </Button>
          )}
          <Button
            borderRadius="full"
            bg="#993659"
            m={2}
            _hover={{
              bg: "#693659",
            }}
            _pressed={{
              bg: "#693659",
            }}
            _focus={{
              bg: "#693659",
            }}
            onPress={() => handleLogOut()}
          >
            Wyloguj się
          </Button>
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
}
