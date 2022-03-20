import { Box, Text, Center, Button, Image } from "native-base";
import * as React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={2} flex={1} w="100%">
        <Image
          alt="Logo"
          w="150px"
          h="150px"
          source={require("../../assets/logo.png")}
        />
        <Text letterSpacing="3" fontSize="20" color="#fff" fontWeight="800">
          Magazyn
        </Text>
        <Box p="2" py="8" w="90%" maxW="290">
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
          >
            Magazyn
          </Button>
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
          >
            Pracownicy
          </Button>
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
          >
            Zarządzaj magazynem
          </Button>
        </Box>
      </Center>
    </Box>
  );
}
