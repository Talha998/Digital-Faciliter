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
import AppStack from "./src/navigation/AppStack";
import { I18nextProvider } from 'react-i18next';
import i18n from './src/language/i18n';
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
     <I18nextProvider i18n={i18n}>
      {loading ? (
        <Splash />
      ) : (
        <SafeAreaProvider>
        <NavigationContainer>
         <AppStack />
        </NavigationContainer>
        </SafeAreaProvider>
        // <SelectDropdown />
      )}
      </I18nextProvider>
    </>
  );
}

export default App;
