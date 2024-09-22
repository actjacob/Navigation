import React from "react";
import { FlatList, View } from "react-native";
import Item from "./item";

const data = [
  { id: 1, name: "Jacob" },
  { id: 2, name: "Ayşe" },
  { id: 3, name: "Fatma" },
];

const UsersScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

export default UsersScreen;
