import React from 'react';

// Theme
import {theme} from './src/theme';

// Theme Provider
import {ThemeProvider} from 'styled-components/native';

// Store
import {store} from './src/redux';

// Redux Provider
import {Provider} from 'react-redux';

import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {MainNavigator} from './src/navigation/main.navigator';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StatusBar backgroundColor="#181A20" />
            <MainNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
};
