import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, findNodeHandle } from "react-native";
import Loading from "../../components/Loading";

const UserDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {loading ? (
        <Loading text="Loading User..." />
      ) : (
        <>
          <Text style={styles.text}>UserDetail</Text>
          <Text style={styles.text}>{JSON.stringify(user, null, 2)} </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default UserDetail;
