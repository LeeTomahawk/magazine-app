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
import { useConfig } from "../../Config/GlobalContext";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

export default function ManagementAddProduct({ navigation }) {
  const { addProduct } = useConfig();
  const [product, setProduct] = useState({
    category: "",
    name: "",
    price: "",
    count: "",
  });
  const handleAddProduct = (product) => {
    if (
      product.category === "" ||
      product.name === "" ||
      product.price === "" ||
      product.count === ""
    ) {
      Alert.alert("Błąd", "Uzupełnij pola.", [{ text: "Ok", style: "cancel" }]);
    } else {
      addProduct(product)
        .then((val) => {
          Alert.alert("Dodano", "Dodano produkt.", [
            { text: "Ok", style: "cancel" },
          ]);
        })
        .catch((exc) => {
          Alert.alert("Błąd", "Uzupełnij pola.", [
            { text: "Ok", style: "cancel" },
          ]);
          navigation.navigate("AddProduct");
        });
      setProduct({});
    }
  };
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
                value={product.category}
                onValueChange={(val) =>
                  setProduct({ ...product, category: val })
                }
              >
                <Select.Item label="Telefon" value="phones" />
                <Select.Item label="Laptop" value="laptops" />
                <Select.Item label="Monitor" value="monitors" />
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
                value={product.name}
                onChangeText={(val) => setProduct({ ...product, name: val })}
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
                value={product.count}
                onChangeText={(val) => setProduct({ ...product, count: val })}
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
                value={product.price}
                onChangeText={(val) => setProduct({ ...product, price: val })}
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
              onPress={() => handleAddProduct(product)}
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
