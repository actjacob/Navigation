import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Item from "./item";
import Loading from "../../components/Loading";
import axios from "axios";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loading text="Loading..." />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item id={item.id} name={item.name} />}
        />
      )}
    </View>
  );
};

export default UsersScreen;
