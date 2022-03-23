import {
  Box,
  Text,
  Center,
  Button,
  Image,
  Icon,
  IconButton,
  VStack,
  HStack,
  Square,
  Circle,
  Flex,
} from "native-base";
import * as React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function MagazinComponent({ navigation }) {
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
        <Button onPress={() => navigation.openDrawer()}>Open</Button>
        <Box p="2" py="8" w="90%" minH="250" maxW="350"></Box>
        <Box w="90%" flexDirection="row" flex={3}>
          <Box flex={1}></Box>
          <Box flex={1}></Box>
          <Box justifyContent="center" alignItems="flex-end" flex={2}>
            <TouchableOpacity
              style={{
                backgroundColor: "#1ab844",
                borderRadius: 100,
                width: 75,
                height: 75,
                alignItems: "center",
                padding: 20,
                marginRight: 2,
              }}
              onPress={() => navigation.navigate("Card")}
            >
              <Icon as={MaterialIcons} name="shopping-cart" color="#fff" />
            </TouchableOpacity>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
