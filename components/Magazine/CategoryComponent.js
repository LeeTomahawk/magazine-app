import { Box, Text, Center, Button, Image, Icon } from "native-base";
import * as React from "react";
import { useState } from "react";
import { useConfig } from "../../Config/GlobalContext";

export default function CategoryComponent({ navigation, route }) {
  const [categoryName, setCategoryName] = useState(route.params.categoryName);
  const { getItems, user } = useConfig();
  const [items, setItems] = useState();
  const handleGetItems = async (categoryName) => {
    const items = await getItems(categoryName);
    setItems({ ...items });
  };
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Center px={0} flex={1} w="100%"></Center>
    </Box>
  );
}
