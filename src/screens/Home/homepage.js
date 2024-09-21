import React from "react";
import { Button, Text, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Users" onPress={() => navigation.navigate("Users")} />

    </View>
  );
}

export default HomeScreen;
