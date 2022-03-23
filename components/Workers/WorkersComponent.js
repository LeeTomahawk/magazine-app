import { Box, Text, Center, Button, Image, Square, Icon } from "native-base";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function WorkersComponent({ navigation }) {
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={2} flex={1} w="100%">
        <Box p="2" py="8" w="90%" minH="400" maxW="350"></Box>
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
