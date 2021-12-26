import React from 'react';

// Constants
import {MAIN_TAB_NAVIGATOR, MOVIE_DETAIL_SCREEN} from './screen-name.constants';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Navigators
import {MainTabNavigator} from './main-tab.navigator';

// Screens

// Components
import {MovieDetailsScreen} from '../screens/movie-details/movie-details.screen';

export const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MAIN_TAB_NAVIGATOR}
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MOVIE_DETAIL_SCREEN}
        component={MovieDetailsScreen}
        options={{title: 'Movie Details'}}
      />
    </Stack.Navigator>
  );
};
