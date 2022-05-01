import { Box, Button, Heading, Text } from "native-base";
import * as React from "react";
import * as Print from "expo-print";

export default function SummaryComponent({ navigation, route }) {
  const [items, setItems] = React.useState(route.params);
  let html;
  const print = async () => {
    await Print.printAsync({
      html,
    });
  };
  const htmltable = () => {
    let t = "";
    for (let i in items) {
      const item = items[i];
      t =
        t +
        `<tr>
          <td>${item.name}</td>
          <td>${item.price} </td>
          <td>${item.itemcount}</td>
          <td>${item.price * item.itemcount}</td>
        </tr>`;
    }
    return t;
  };
  React.useEffect(() => {
    html = `
    <html>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            text-align:center;
        }
        tr:nth-child(even) {
            background-color: rgba(150, 212, 212, 0.4);
        }
            
        </style>
        <body>
            <h1>Dokument potwierdzający pobranie przedmiotów</h1>
            <table style="width:100%">
                <tr>
                    <th>Nazwa</th>
                    <th>Cena /zł</th>
                    <th>Ilość /szt</th>
                    <th>Razem</th>
                </tr>
                ${htmltable()}
            </table>
        </body>
    </html>
    `;
  });
  return (
    <Box flex={1} w="100%" bg="#121212">
      <Heading textAlign={"center"} color={"#fff"} my={2} size={"md"}>
        Pobrałeś z magazynu przedmioty.
      </Heading>
      <Text textAlign={"center"} color={"#fff"} my={2}>
        Poniżej możesz wydrukowac potwierdzenie w formie pdf
      </Text>
      <Button
        textAlign={"center"}
        ml={"25%"}
        borderRadius={50}
        bg={"#8442bd"}
        w={"50%"}
        mt={5}
        title="Print"
        onPress={print}
      >
        Drukuj
      </Button>
    </Box>
  );
}
