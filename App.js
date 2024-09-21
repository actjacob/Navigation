import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import * as React from "react";

//screens
import HomeScreen from "./src/screens/Home/homepage";
import UserDetail from "./src/screens/UserDetail/UserDetail";
import UsersScreen from "./src/screens/Users/userspage";
import HeaderLogo from "./src/components/HeaderLogo";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EEE',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Featured",
            headerTitle: (props) => <HeaderLogo {...props}/>
           }}
        />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{ title: "User",
            
           }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({route}) => ({title:route.params.name})}
     
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
