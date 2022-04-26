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
  Flex,
  Heading,
} from "native-base";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { useConfig } from "../../Config/GlobalContext";
import { useState, useEffect } from "react";
import NumericInput from "react-native-numeric-input";

export default function CardComponent({ navigation }) {
  const { getItemsList, removeItemFromList, setItemCount } = useConfig();
  let [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItemsList());
  }, []);
  const removeItem = (id) => {
    let arr = items.filter(function (item) {
      return item.id !== id;
    });
    setItems(arr);
    removeItemFromList(arr);
  };
  const addCount = (id, val) => {
    setItemCount(id, val);
  };
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Box px={2} w="100%" minH={"4/5"} maxH={"4/5"}>
        <Heading textAlign={"center"} color={"#fff"} my={5} size={"md"}>
          Dodano {items.length}
        </Heading>
        <FlatList
          data={items.filter((val, id) => items.indexOf(val) !== id)}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
              w={"100%"}
            >
              <Box flexDirection="row">
                <Box py={5} flex={5} textAlign={"left"}>
                  <Text color="#fff">{item.name}</Text>
                  <Text color="#fff">Cena: {item.price} zł/szt</Text>
                </Box>
                <Box justifyContent="center" alignItems="center" flex={3}>
                  <Text color={"#fff"}>Ilość</Text>
                  <NumericInput
                    value={item.itemcount}
                    totalWidth={50}
                    totalHeight={40}
                    type="up-down"
                    rounded
                    textColor={"#fff"}
                    maxValue={99}
                    minValue={1}
                    iconStyle={{ color: "#000" }}
                    onChange={(x) => {
                      addCount(item.id, x);
                    }}
                  />
                </Box>
                <Box justifyContent="center" alignItems="flex-end" flex={2}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#DF1B1B",
                      borderRadius: 100,
                      width: 30,
                      height: 30,
                      alignItems: "center",
                      padding: 5,
                      margin: 5,
                    }}
                    onPress={() => {
                      removeItem(item.id);
                    }}
                  >
                    <MaterialIcons name="delete" size={20} color="#c5c5c5" />
                  </TouchableOpacity>
                </Box>
              </Box>
              <Box justifyContent="center" alignItems="flex-end" flex={2}>
                <Text color={"#fff"}>
                  Łącznie: {item.price * item.itemcount}
                </Text>
              </Box>
            </Box>
          )}
          keyExtractor={(item, index) => item.id}
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
          onPress={() => console.log(items)}
        >
          <Text color={"#fff"} fontWeight={"bold"}>
            Potwierdź
          </Text>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
}
