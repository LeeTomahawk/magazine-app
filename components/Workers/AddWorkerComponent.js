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
import * as React from "react";

export default function AddWorkerComponent({ navigation }) {
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={4} flex={1} w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="#ffffff">
            Dodaj pracownika
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
            <FormControl>
              <FormControl.Label>
                <Text color="#fff">Powtórz hasło</Text>
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
              Zarejestruj
            </Button>
            <HStack mt="6" justifyContent="center"></HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
