import {
  Text,
  HStack,
  Center,
  Heading,
  VStack,
  Input,
  FormControl,
  Button,
  Box,
  Image,
  ScrollView,
} from "native-base";
import * as React from "react";
import { useState, useEffect } from "react";
import { useConfig } from "../../Config/GlobalContext";
import { Alert } from "react-native";

export default function AddWorkerComponent({ navigation }) {
  const { addWorker } = useConfig();
  const [worker, setWorker] = useState({
    email: "",
    password: "",
    cpassword: "",
    role: "pracownik",
    name: "",
    sname: "",
  });
  const handleAddWorker = () => {
    if (
      (worker.email === "" ||
        worker.name === "" ||
        worker.sname === "" ||
        worker.password === "" ||
        worker.cpassword) &&
      worker.password !== worker.cpassword
    ) {
      Alert.alert("Błąd", "Uzupełnij pola lub hasła się różnią.", [
        { text: "Ok", style: "cancel" },
      ]);
    } else {
      addWorker(worker)
        .then((val) => {
          Alert.alert("Dodano", "Dodano pracownika.", [
            { text: "Ok", style: "cancel" },
          ]);
          setWorker([]);
          navigation.navigate("Workers");
        })
        .catch((exc) => {
          Alert.alert(
            "Błąd",
            "Użytkownik o podanym adresie prawdopodobnie istnieje lub hasło nie składa się z min. 6 znaków!",
            [{ text: "Ok", style: "cancel" }]
          );
        });
    }
  };
  return (
    <Box flex={1} w="100%" bg="#121212">
      <ScrollView>
        <Center px={4} flex={1} w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="#ffffff">
              Dodaj pracownika
            </Heading>
            <HStack w="50%">
              <FormControl>
                <FormControl.Label color="#fff">
                  <Text color="#fff">Imie</Text>
                </FormControl.Label>
                <Input
                  color="#fff"
                  placeholder="Np. Jan"
                  mr={2}
                  _hover={{
                    bg: "#131313",
                  }}
                  _focus={{
                    borderColor: "#9442bd",
                  }}
                  value={worker.name}
                  onChangeText={(val) => setWorker({ ...worker, name: val })}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label color="#fff">
                  <Text color="#fff">Nazwisko</Text>
                </FormControl.Label>
                <Input
                  color="#fff"
                  placeholder="Np. Kowalski"
                  ml={2}
                  _hover={{
                    bg: "#131313",
                  }}
                  _focus={{
                    borderColor: "#9442bd",
                  }}
                  value={worker.sname}
                  onChangeText={(val) => setWorker({ ...worker, sname: val })}
                />
              </FormControl>
            </HStack>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label color="#fff">
                  <Text color="#fff">Email</Text>
                </FormControl.Label>
                <Input
                  color="#fff"
                  placeholder="Np. jan.kowalski@gmail.com"
                  _hover={{
                    bg: "#131313",
                  }}
                  _focus={{
                    borderColor: "#9442bd",
                  }}
                  value={worker.email}
                  onChangeText={(val) => setWorker({ ...worker, email: val })}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text color="#fff">Hasło</Text>
                </FormControl.Label>
                <Input
                  color="#fff"
                  type="password"
                  placeholder="Hasło"
                  _hover={{
                    bg: "#131313",
                  }}
                  _focus={{
                    borderColor: "#9442bd",
                  }}
                  value={worker.password}
                  onChangeText={(val) =>
                    setWorker({ ...worker, password: val })
                  }
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text color="#fff">Powtórz hasło</Text>
                </FormControl.Label>
                <Input
                  color="#fff"
                  type="password"
                  placeholder="Hasło"
                  _hover={{
                    bg: "#131313",
                  }}
                  _focus={{
                    borderColor: "#9442bd",
                  }}
                  value={worker.cpassword}
                  onChangeText={(val) =>
                    setWorker({ ...worker, cpassword: val })
                  }
                />
              </FormControl>
              <HStack justifyContent="center">
                <Button
                  mt="8"
                  bg="#8442bd"
                  borderRadius="full"
                  w={"1/2"}
                  textAlign="center"
                  _hover={{
                    bg: "#9442bd",
                  }}
                  _pressed={{
                    bg: "#9442bd",
                  }}
                  _focus={{
                    bg: "#9442bd",
                  }}
                  onPress={() => handleAddWorker(worker)}
                >
                  Zarejestruj
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </ScrollView>
    </Box>
  );
}
