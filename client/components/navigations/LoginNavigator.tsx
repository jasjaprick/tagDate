import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginSuccessPage from '../pages/LoginSuccessPage';
import LoginPage from '../pages/LoginPage';

const Menu = createStackNavigator();

function LoginNavigator() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Menu.Screen name="LoginPage" component={LoginPage} />
      <Menu.Screen name="LoginSuccessPage" component={LoginSuccessPage} />
    </Menu.Navigator>
  );
}

export default LoginNavigator;
