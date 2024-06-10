/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import AppNavigator from './container/AppNavigator';
// import { ThemeProvider } from "./container/ThemeContext";
// import 'react-native-gesture-handler';
import HomeScreen from './src/container/HomeScreen';
import SplashScreen from 'react-native-splash-screen';
import Splash from './src/screens/SplashScreen';
// import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  // useEffect(() => {
  //   SplashScreen.hide();
  // },[] )
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    SplashScreen;
    setLoading(false);
  }, 3000);

  return (
    <>
          {loading ? <Splash /> : <HomeScreen />}
    </>
  );
}



export default App;
