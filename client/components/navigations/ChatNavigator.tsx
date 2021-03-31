import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import IndividualChatPage from '../pages/IndividualChatPage';
import ChatPage from '../pages/ChatPage';

const Menu = createStackNavigator();

function LoginNavigator() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: false,
      }}>
      <Menu.Screen name='ChatPage' component={ChatPage} />
      <Menu.Screen name='IndividualChatPage' component={IndividualChatPage} />
    </Menu.Navigator>
  );
}

export default LoginNavigator;
