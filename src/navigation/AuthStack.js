import React from 'react';
import HomeScreen from '../container/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SelectDropdown from "../screens/SelectDropdown";
import DrawerNavigator from "../navigation/AppStack";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SelectDropdown" component={SelectDropdown} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;