/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  NavigationContainer
} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import RootNavigator from './src/system/navigation/RootNavigator';
import { store } from './src/system/redux/store/Store';
import { AppDarkTheme, AppLightTheme } from './src/system/themes/ThemeColors';
import { ThemeProvider, useTheme } from './src/system/themes/ThemeProvider';

const MainApp = () => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? AppDarkTheme : AppLightTheme;

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <View
            style={{
              flex: 1,
            }}>
            <NavigationContainer>

              <RootNavigator />

            </NavigationContainer>
          </View>
        </Provider>
      </PaperProvider>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
