import { View, Text, Button } from "react-native";
import React from "react";

const UsersScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>UsersScreen</Text>
      <Button title="Featured" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default UsersScreen;
