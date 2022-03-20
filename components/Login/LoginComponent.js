import React from "react";
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
} from "native-base";

const LoginComponent = ({ navigation }) => {
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={4} flex={1} w="100%">
        <Image
          alt="Logo"
          w="150px"
          h="150px"
          source={require("../../assets/logo.png")}
        />
        <Text letterSpacing="3" fontSize="20" color="#fff" fontWeight="800">
          Magazyn
        </Text>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="#ffffff">
            Witaj
          </Heading>
          <Heading mt="1" color="#c5c5c5" fontWeight="medium" size="xs">
            Zaloguj się do aplikacji!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label color="#fff">
                <Text color="#fff">Email</Text>
              </FormControl.Label>
              <Input
                color="#fff"
                placeholder="email"
                _hover={{
                  bg: "#131313",
                }}
                _focus={{
                  borderColor: "#9442bd",
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text color="#fff">Hasło</Text>
              </FormControl.Label>
              <Input
                color="#fff"
                type="password"
                placeholder="hasło"
                _hover={{
                  bg: "#131313",
                }}
                _focus={{
                  borderColor: "#9442bd",
                }}
              />
            </FormControl>
            <Button
              mt="8"
              bg="#8442bd"
              borderRadius="full"
              onPress={() => navigation.navigate("Home")}
              _hover={{
                bg: "#9442bd",
              }}
              _pressed={{
                bg: "#9442bd",
              }}
              _focus={{
                bg: "#9442bd",
              }}
            >
              Zaloguj się
            </Button>
            <HStack mt="6" justifyContent="center"></HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};
export default LoginComponent;
