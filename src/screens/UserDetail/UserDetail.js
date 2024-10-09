import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "../../components/Loading";

const UserDetail = ({ route, navigation }) => {
  const { id } = route.params;

  const [userId, setUserId] = useState(id);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setUserId((id) => (id + 1 === 11 ? 1 : id + 1))}
          title="Next"
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <View>
      <Text>User ID:{userId} </Text>
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
