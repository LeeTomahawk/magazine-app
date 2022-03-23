import { MaterialIcons } from "@expo/vector-icons";
import { Box, Text, Center, Button, Image, Icon } from "native-base";
import * as React from "react";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={2} flex={1} w="100%">
        <Image
          alt="Logo"
          w="120px"
          h="120px"
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
            onPress={() => navigation.navigate("MagazinDrawer")}
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
            onPress={() => navigation.navigate("Workers")}
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
            onPress={() => navigation.navigate("Management")}
          >
            Zarządzaj magazynem
          </Button>
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
            onPress={() => navigation.navigate("Login")}
          >
            Wyloguj się
          </Button>
        </Box>
      </Center>
    </Box>
  );
}
