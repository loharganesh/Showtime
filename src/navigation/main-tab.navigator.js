import React from 'react';

import {useSelector} from 'react-redux';

// Constants
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  PROFILE_SCREEN,
} from './screen-name.constants';

// Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Navigators

// Screens
import {HomeScreen} from '../screens/home/home.screen';
import {LoginScreen} from '../screens/login/login.screen';
import {ProfileScreen} from '../screens/profile/profile.screen';
import {RegisterScreen} from '../screens/register/register.screen';

// Components
import {Icon} from '../components/icon/icon.component';

export const MainTabNavigator = () => {
  const {user} = useSelector(state => state.userReducer);

  const Tab = createBottomTabNavigator();

  const icons = {
    [HOME_SCREEN]: filled => (
      <Icon name={filled ? 'HOME_FILLED' : 'HOME_LINE'} />
    ),
    [LOGIN_SCREEN]: filled => (
      <Icon name={filled ? 'KEY_FILLED' : 'KEY_LINE'} />
    ),
    [PROFILE_SCREEN]: filled => (
      <Icon name={filled ? 'USER_FILLED' : 'USER_LINE'} />
    ),
    [REGISTER_SCREEN]: filled => (
      <Icon name={filled ? 'LOCK_FILLED' : 'LOCK_LINE'} />
    ),
  };

  const screenOptions = ({route}) => ({
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({focused}) => icons[route.name](focused),
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      {user === null ? (
        <>
          <Tab.Screen
            name={LOGIN_SCREEN}
            component={LoginScreen}
            options={{title: 'Login'}}
          />
          <Tab.Screen
            name={REGISTER_SCREEN}
            component={RegisterScreen}
            options={{title: 'Register'}}
          />
        </>
      ) : (
        <Tab.Screen
          name={PROFILE_SCREEN}
          component={ProfileScreen}
          options={{title: 'Your Profile', headerShown: true}}
        />
      )}
    </Tab.Navigator>
  );
};
