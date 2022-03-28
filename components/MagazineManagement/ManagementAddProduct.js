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
  Select,
} from "native-base";
import * as React from "react";

export default function ManagementAddProduct({ navigation }) {
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={4} flex={1} w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="#ffffff">
            Dodaj produkt
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label color="#fff">
                <Text color="#fff">Kategoria produktu</Text>
              </FormControl.Label>
              <Select
                color={"#fff"}
                placeholder="Kategoria produktu"
                _hover={{
                  bg: "#131313",
                }}
                _focus={{
                  borderColor: "#9442bd",
                }}
              >
                <Select.Item label="Telefon" value="telefon" />
                <Select.Item label="Laptop" value="laptop" />
                <Select.Item label="Monitor" value="monitor" />
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text color="#fff">Nazwa produktu</Text>
              </FormControl.Label>
              <Input
                color="#fff"
                type="text"
                placeholder="Np. Xiaomi Redmi 8T"
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
                <Text color="#fff">Ilość sztuk</Text>
              </FormControl.Label>
              <Input
                color="#fff"
                type="text"
                keyboardType="numeric"
                placeholder="Ilość sztuk"
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
                <Text color="#fff">Cena za sztukę</Text>
              </FormControl.Label>
              <Input
                color="#fff"
                type="text"
                keyboardType="numeric"
                placeholder="Cena za sztukę"
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
              Dodaj produkt
            </Button>
            <HStack mt="6" justifyContent="center"></HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
