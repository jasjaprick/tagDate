import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginSuccessPage from '../pages/LoginSuccessPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import LocationPage from '../organisms/Location';


import colors from '../../helpers/colors';

const Menu = createStackNavigator();

function LoginNavigator() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: colors.violet,

      }}
    >
      <Menu.Screen name='LoginPage' component={LoginPage} />
      <Menu.Screen name='RegisterPage' component={RegisterPage} />

      <Menu.Screen name='LoginSuccessPage' component={LoginSuccessPage} />
    </Menu.Navigator>
  );
}

export default LoginNavigator;
