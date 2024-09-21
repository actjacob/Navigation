import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

//screens
import HomeScreen from "./src/screens/Home/homepage";
import UserDetail from "./src/screens/UserDetail/UserDetail";
import UsersScreen from "./src/screens/Users/userspage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Featured" }}
        />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{ title: "User" }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={{ title: "Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
