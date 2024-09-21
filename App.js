import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import * as React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';


//screens
import HomeScreen from "./src/screens/Home/homepage";
import UserDetail from "./src/screens/UserDetail/UserDetail";
import UsersScreen from "./src/screens/Users/userspage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



//Home Stack
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    
    </HomeStack.Navigator>
  );
}

// Settings Stack

const UsersStack = createNativeStackNavigator();

function UsersStackScreen() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="User" component={UsersScreen} />
      <UsersStack.Screen name="UserDetail" component={UserDetail} />
    </UsersStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName =  'home';
          } else if (route.name === 'UsersTab') {
            iconName =  'people' ;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="HomeTab" component={HomeStackScreen}  options={{title:"Home"}} />
        <Tab.Screen name="UsersTab" component={UsersStackScreen} options={{ tabBarBadge: 3, title:"Users" }}  />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default App;

{/* <Stack.Navigator initialRouteName="Home"
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
      </Stack.Navigator> */}