import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TagDatePage from '../pages/TagDatePage';
import { colors } from '../../helpers/styles';
import MatchSuccessPage from '../pages/MatchSuccessPage';
import MenuNavigator from './MenuNavigator';
import ImageUserPage from '../pages/ImageUserPage';
import ChatNavigator from './ChatNavigator';

const Menu = createStackNavigator();

function LoginNavigator() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.violet,
      }}>
      <Menu.Screen name='LoginPage' component={LoginPage} />

      <Menu.Screen name='MenuNavigator' component={MenuNavigator} />

      <Menu.Screen name='RegisterPage' component={RegisterPage} />

      <Menu.Screen name='ImageUserPage' component={ImageUserPage} />

      <Menu.Screen name='TagDatePage' component={TagDatePage} />

      <Menu.Screen name='MatchSuccessPage' component={MatchSuccessPage} />

      <Menu.Screen name='Chat' component={ChatNavigator} />
    </Menu.Navigator>
  );
}

export default LoginNavigator;
