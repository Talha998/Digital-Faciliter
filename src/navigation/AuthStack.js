import React from 'react';
import HomeScreen from '../container/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SelectDropdown from "../screens/SelectDropdown";
import DrawerNavigator from "../navigation/AppStack";
import DeniedByDeviceScreen from '../screens/DeniedByDeviceScreen';
import DeniedByCardholder from '../screens/DeniedByCardholder';
import DoorAlarm from '../screens/DoorAlarm';
import DevicesActivity from '../screens/DevicesActivity';
import AttendanceAnalysis from '../screens/AttendanceAnalysis';
import AbsenteesPeople from '../screens/AbsenteesPeople';
import UserGuide from '../screens/UserGuide';
import Feedback from '../screens/Feedback';
import SettingsScreen from '../screens/SettingsScreen';
import PrivacyStatments from '../screens/PrivacyStatments';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SelectDropdown" component={SelectDropdown} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="DeniedByDeviceScreen" component={DeniedByDeviceScreen} />
      <Stack.Screen name="DeniedByCardholder" component={DeniedByCardholder} />
      <Stack.Screen name="DoorAlarm" component={DoorAlarm} />
      <Stack.Screen name="DevicesActivity" component={DevicesActivity} />
      <Stack.Screen name="AttendanceAnalysis" component={AttendanceAnalysis} />
      <Stack.Screen name="AbsenteesPeople" component={AbsenteesPeople} />
      <Stack.Screen name="UserGuide" component={UserGuide} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PrivacyStatments" component={PrivacyStatments} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;