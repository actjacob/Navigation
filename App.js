import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;

{
  /* <Stack.Navigator initialRouteName="Home"
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
      </Stack.Navigator> */
}
