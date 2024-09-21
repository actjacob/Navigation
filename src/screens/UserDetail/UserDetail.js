import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const UserDetail = ({ route ,navigation}) => {
  const data = route.params




  return (
    <View>
      <Text style={styles.text} >UserDetail</Text>
      <Text style={styles.text} >{JSON.stringify(data,null,2)}  </Text>
      <Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>

    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }

})

export default UserDetail