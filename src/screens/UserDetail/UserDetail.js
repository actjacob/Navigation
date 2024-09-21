import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserDetail = ({ route }) => {
  const data = route.params




  return (
    <View>
      <Text style={styles.text} >UserDetail</Text>
      <Text style={styles.text} >{JSON.stringify(data,null,2)}  </Text>

    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }

})

export default UserDetail