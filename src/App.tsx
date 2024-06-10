/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './container/AppNavigator';
import { ThemeProvider } from "./container/ThemeContext";
import 'react-native-gesture-handler';
import HomeScreen from './container/HomeScreen';
import Splash from "./screens/SplashScreen";
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
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    SplashScreen;
    setLoading(false);
  }, 2000);
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
     <ThemeProvider>
     {/* <NavigationContainer>
    <AppNavigator />
    </NavigationContainer> */}
     {loading ? <Splash /> : <HomeScreen />}
    </ThemeProvider>
    </>
  );
}



export default App;
