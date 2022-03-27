import {
  Box,
  Text,
  Center,
  Button,
  Image,
  Square,
  Icon,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Spacer,
  ScrollView,
  Alert,
} from "native-base";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";

export default function CardComponent({ navigation }) {
  const data = [
    {
      id: "1",
      nazwa: "Xiaomi 8T",
      kategoria: "telefon",
      cena: 500,
      ilosc: 1,
    },
    {
      id: "2",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
    {
      id: "3",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
    {
      id: "4",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
    {
      id: "5",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
    {
      id: "6",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
    {
      id: "7",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
    {
      id: "8",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
    {
      id: "9",
      nazwa: "Xiaomi 9A",
      kategoria: "telefon",
      cena: 300,
      ilosc: 2,
    },
  ];
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Box px={5} py={10} w="100%" minH={"4/5"} maxH={"4/5"}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Ionicons name="add-outline" size={30} color="#c5c5c5" />
                <VStack>
                  <Text color="#fff" bold>
                    {item.nazwa}
                  </Text>
                  <Text color="coolGray.600">{item.kategoria}</Text>
                </VStack>
                <Spacer />
                <VStack>
                  <Text fontSize="xs" color="#fff" alignSelf="flex-start">
                    Cena: {item.cena * item.ilosc} zł
                  </Text>
                  <Text fontSize="xs" color="#fff" alignSelf="flex-start">
                    Ilość: {item.ilosc}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <HStack pt={5} space={3} justifyContent="center">
        <TouchableOpacity
          style={{
            backgroundColor: "#1ab844",
            borderRadius: 50,
            width: 175,
            height: 50,
            alignItems: "center",
            padding: 15,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text color={"#fff"} fontWeight={"bold"}>
            Potwierdź
          </Text>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
}
