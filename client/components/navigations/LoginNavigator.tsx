import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginSuccessPage from '../pages/LoginSuccessPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import LocationPage from '../organisms/Location';
import TagDatePage from '../pages/TagDatePage';
import { colors } from '../../helpers/styles';
import MatchSuccessPage from '../pages/MatchSuccessPage';
import ChatPage from '../pages/ChatPage';
import MenuNavigator from './MenuNavigator';
import IndividualChatPage from '../pages/IndividualChatPage';
import Chat from '../atoms/Chat';
import ImageUserPage from '../pages/ImageUserPage';

const Menu = createStackNavigator();

function LoginNavigator() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.violet,
      }}>
      {/* <Menu.Screen name='IndividualChatPage' component={IndividualChatPage} /> */}

      <Menu.Screen name='LoginPage' component={LoginPage} />

      <Menu.Screen name='MenuNavigator' component={MenuNavigator} />

      <Menu.Screen name='RegisterPage' component={RegisterPage} />

      <Menu.Screen name='ImageUserPage' component={ImageUserPage} />

      <Menu.Screen name='TagDatePage' component={TagDatePage} />

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
    </Menu.Navigator>
  );
}

export default LoginNavigator;
