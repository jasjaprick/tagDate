import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginSuccessPage from '../pages/LoginSuccessPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import LocationPage from '../organisms/Location';
import TagDatePage from '../pages/TagDatePage';
import colors from '../../helpers/colors';
import MatchSuccessPage from '../pages/MatchSuccessPage';
import ChatPage from '../pages/ChatPage';

const Menu = createStackNavigator();

function LoginNavigator() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: colors.violet,
      }}
    >
      <Menu.Screen
        name='ChatPage'
        component={ChatPage}
        options={{ headerShown: false }}
      />
      <Menu.Screen
        name='MatchSuccessPage'
        component={MatchSuccessPage}
        options={{ headerShown: false }}
      />
      <Menu.Screen
        name='LoginPage'
        component={LoginPage}
        options={{ headerShown: false }}
      />

      <Menu.Screen name='TagDatePage' component={TagDatePage} />
      <Menu.Screen name='RegisterPage' component={RegisterPage} />
      <Menu.Screen name='LoginSuccessPage' component={LoginSuccessPage} />
    </Menu.Navigator>
  );
}

export default LoginNavigator;
