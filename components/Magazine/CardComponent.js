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
import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { useConfig } from "../../Config/GlobalContext";
import { useState, useEffect } from "react";
import NumericInput from "react-native-numeric-input";

export default function CardComponent({ navigation }) {
  const { getItemsList, removeItemFromList } = useConfig();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItemsList());
  }, []);
  const removeItem = (id) => {
    let arr = items.filter(function (item) {
      return item.id !== id;
    });
    setItems(arr);
    removeItemFromList(id);
  };
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Box px={2} w="100%" minH={"4/5"} maxH={"4/5"}>
        <Heading textAlign={"center"} color={"#fff"} my={5} size={"md"}>
          Dodano {items.length}
        </Heading>
        <FlatList
          data={items}
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
                </Box>
                <Box justifyContent="center" alignItems="center" flex={3}>
                  <Text color={"#fff"}>Ilość</Text>
                  <NumericInput
                    value={1}
                    totalWidth={50}
                    totalHeight={40}
                    type="up-down"
                    rounded
                    textColor={"#fff"}
                    maxValue={99}
                    minValue={1}
                    iconStyle={{ color: "#000" }}
                  />
                </Box>
                <Box
                  justifyContent="center"
                  alignItems="flex-end"
                  flex={2}
                  bg={"red.200"}
                >
                  <Button
                    onPress={() => {
                      removeItem(item.id);
                    }}
                  >
                    A
                  </Button>
                </Box>
              </Box>
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
