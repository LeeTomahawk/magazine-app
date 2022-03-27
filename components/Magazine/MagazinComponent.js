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
  Heading,
  Spacer,
} from "native-base";
import * as React from "react";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function MagazinComponent({ navigation }) {
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={0} flex={1} w="100%">
        <Image
          alt="Logo"
          w="75px"
          h="75px"
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
        <Heading mt={3} size="lg" fontWeight="600" color="#ffffff">
          Dzień dobry!
        </Heading>
        <Heading mt="1" color="#c5c5c5" fontWeight="medium" size="xs">
          Czego potrzebujesz?
        </Heading>
        <Box
          borderColor={"gray.700"}
          borderWidth="1"
          py="2"
          mt="2"
          w="100%"
          bg={"#1a1919"}
        ></Box>
        <Heading size={"md"} color="#fff">
          Kategorie
        </Heading>
        <Box flexDirection={"row"} justifyContent={"center"} mt={5}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#fff",
              width: 100,
              height: 125,
              alignItems: "center",
              padding: 20,
              margin: 5,
            }}
          >
            <MaterialIcons size={50} mt={5} name="smartphone" color="#fff" />
            <Text mt={2} color={"#fff"}>
              Telefony
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#fff",
              width: 100,
              height: 125,
              alignItems: "center",
              padding: 20,
              margin: 5,
            }}
          >
            <Entypo name="laptop" size={50} mt={5} color="#fff" />
            <Text mt={2} color={"#fff"}>
              Laptopy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#fff",
              width: 100,
              height: 125,
              alignItems: "center",
              padding: 20,
              margin: 5,
            }}
          >
            <MaterialIcons name="monitor" size={50} mt={5} color="#fff" />
            <Text mt={2} color={"#fff"}>
              Monitory
            </Text>
          </TouchableOpacity>
        </Box>
        <Box
          borderColor={"gray.700"}
          borderWidth="1"
          py="2"
          mt="5"
          w="100%"
          bg={"#1a1919"}
        ></Box>
        <Heading color={"#fff"} mt={2} size={"md"}>
          Koszyk
        </Heading>
        <Box w="90%" flexDirection="row" flex={3}>
          <Box flex={4} pt={10}>
            <Text color="#fff" textAlign={"center"}>
              Wybierz interesujące Cię przedmioty i pobierz je z magazynu!
            </Text>
          </Box>
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
