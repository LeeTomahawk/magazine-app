import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import {
  Box,
  Text,
  Center,
  Button,
  Image,
  Icon,
  Divider,
  FlatList,
  HStack,
  VStack,
} from "native-base";
import * as React from "react";
import { useState, useEffect } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { useConfig } from "../../Config/GlobalContext";

export default function CategoryComponent({ navigation, route }) {
  const [categoryName, setCategoryName] = useState(route.params.categoryName);
  const { getItems, user } = useConfig();
  const [items, setItems] = useState([]);
  const handleGetItems = async (categoryName) => {
    const items = await getItems(categoryName);
    setItems(items);
  };
  useEffect(() => {
    navigation.setOptions({
      title:
        categoryName === ""
          ? "No title"
          : categoryName === "phones"
          ? "Telefony"
          : categoryName === "laptops"
          ? "Laptopy"
          : categoryName === "monitors"
          ? "Monitory"
          : "cos nastepnego",
    });
    handleGetItems(categoryName);
  }, []);
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={0} flex={1} w="100%">
        <Box textAlign={"center"}>
          <Text color={"#fff"}>Wyszukano {items.length} pozycji</Text>
        </Box>
        <Divider w="90%" />
        <Box p="2" py="8" w="95%" minH="350" maxH="520">
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Box>
                <Box mt="5" pl="4" pr="5" py="2" minH={100}>
                  <HStack space={3} justifyContent="space-between">
                    <Center>
                      <MaterialCommunityIcons
                        name="timer-sand-empty"
                        size={35}
                        color="#c5c5c5"
                      />
                    </Center>
                    <VStack>
                      <Center>
                        <Text color="#fff" bold>
                          {item.name}
                        </Text>
                        <Text textAlign={"left"} mt={2} color="#fff">
                          Cena: {item.price}
                        </Text>
                      </Center>
                    </VStack>
                    <VStack>
                      <Center>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#1ab844",
                            borderRadius: 100,
                            width: 30,
                            height: 30,
                            alignItems: "center",
                            padding: 5,
                            margin: 5,
                          }}
                        >
                          <MaterialIcons name="add" size={20} color="#c5c5c5" />
                        </TouchableOpacity>
                        <Text color="#fff" bold>
                          Ilość: {item.count}
                        </Text>
                      </Center>
                    </VStack>
                  </HStack>
                </Box>
                <Divider w={"100%"} />
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </Center>
    </Box>
  );
}
