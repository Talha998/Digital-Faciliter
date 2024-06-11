import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/container/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Splash from './src/screens/SplashScreen';
import AuthStack from './src/navigation/AuthStack';
import SelectDropdown from "./src/screens/SelectDropdown";
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous initialization
    setTimeout(() => {
      SplashScreen.hide();
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        // <SafeAreaProvider>
        // <NavigationContainer>
        //  <AuthStack />
        // </NavigationContainer>
        // </SafeAreaProvider>
        <SelectDropdown />
      )}
    </>
  );
}

export default App;
