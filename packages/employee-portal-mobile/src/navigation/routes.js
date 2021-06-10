import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import defaultNavigationOptions from './navigationOptions';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import LogIn from '../screens/LogIn'

const Stack = createStackNavigator();

export function RootStack() {
  return (

    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={defaultNavigationOptions}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My app' }}
      />
      <Stack.Screen
        name="Login"
        component={LogIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
  );
}
