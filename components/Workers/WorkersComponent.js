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
} from "native-base";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { useConfig } from "../../Config/GlobalContext";
import { useState, useEffect } from "react";

export default function WorkersComponent({ navigation }) {
  const { getWorkers, user } = useConfig();
  const [workers, setWorkers] = useState([]);
  const handleGetWorkers = async () => {
    const workers = await getWorkers();
    setWorkers(workers);
  };
  useEffect(() => {
    handleGetWorkers();
  }, []);
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={0} flex={1} w="100%">
        <Box textAlign={"center"}>
          <Text color={"#fff"}>Liczba pracowników: {workers.length}</Text>
        </Box>
        <Box p="2" py="8" w="90%" minH="350" maxH="520" maxW="350" zIndex={2}>
          <FlatList
            data={workers}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Octicons name="person" size={40} color="#c5c5c5" />
                  <VStack minW={"150"}>
                    <Text color="#fff" bold>
                      {item.name} {item.sname}
                    </Text>
                    <Text textAlign={"left"} color="#fff">
                      {item.email}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text textAlign={"right"} color="coolGray.600">
                      Pracownik
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
        <Box w="90%" flexDirection="row" flex={3}>
          <Box flex={1}></Box>
          <Box flex={1}></Box>
          <Box
            justifyContent="center"
            alignItems="flex-end"
            flex={2}
            position="relative"
            zIndex={1}
          >
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
              onPress={() => navigation.navigate("AddWorker")}
            >
              <Icon as={Ionicons} name="ios-person-add" color="#fff" />
            </TouchableOpacity>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
