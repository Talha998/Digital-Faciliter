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
    
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SelectDropdown" component={SelectDropdown} options={{ headerShown: false }} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Denied By Device" component={DeniedByDeviceScreen} />
      <Stack.Screen name="Denied By Cardholder" component={DeniedByCardholder} />
      <Stack.Screen name="Door Alarm" component={DoorAlarm} />
      <Stack.Screen name="Devices Activity" component={DevicesActivity} />
      <Stack.Screen name="Attendance Analysis" component={AttendanceAnalysis} />
      <Stack.Screen name="Absentees People" component={AbsenteesPeople} />
      <Stack.Screen name="User Guide" component={UserGuide} />
      <Stack.Screen name="Feed back" component={Feedback} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Privacy Statments" component={PrivacyStatments} />
      <Stack.Screen name="About Screen" component={AboutScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;