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

export default function WorkersComponent({ navigation }) {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
    },
    {
      id: "68694a0f-3da1-431f-bd55-142371e29d72",
      fullName: "Aniket Kumar",
    },
    {
      id: "28694a0f-3da1-471f-bd91-142456e29d72",
      fullName: "Kiara",
    },
    {
      id: "68694v0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
    },
    {
      id: "2869420f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
    },
    {
      id: "68694v0f-3da1-431f-bd56-142371e29d721",
      fullName: "Aniket Kumar",
    },
    {
      id: "2869420f-3da1-471f-bd96-142456e29d73",
      fullName: "Kiara",
    },
    {
      id: "68694v0f-3da1-4311f-bd56-142371e29d721",
      fullName: "Aniket Kumar",
    },
    {
      id: "2869420f-3da1-1471f-bd96-142456e29d73",
      fullName: "Kiara",
    },
  ];
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={0} flex={1} w="100%">
        <Box p="2" py="8" w="90%" minH="350" maxH="520" maxW="350" zIndex={2}>
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
                  <Octicons name="person" size={40} color="#c5c5c5" />
                  <VStack>
                    <Text color="#fff" bold>
                      {item.fullName}
                    </Text>
                    <Text color="coolGray.600">Pracownik</Text>
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
