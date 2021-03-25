import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../helpers/colors';
import ChatPage from '../pages/ChatPage';
import SwipePage from '../pages/SwipePage';
import LoginNavigator from './LoginNavigator';

const Menu = createBottomTabNavigator();

function MenuNavigator() {
  return (
    <Menu.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.violet,
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
    >
      <Menu.Screen
        name='Swipe'
        component={SwipePage}
        options={{
          tabBarIcon: () => <AntDesign name='heart' size={24} color='black' />,
        }}
      />
      <Menu.Screen
        name='Chat'
        component={ChatPage}
        options={{
          tabBarIcon: () => (
            <Ionicons name='chatbox-ellipses-sharp' size={24} color='black' />
          ),
        }}
      />
      <Menu.Screen
        name='Profile'
        component={ChatPage}
        options={{
          tabBarIcon: () => (
            <Ionicons name='person-circle-sharp' size={24} color='black' />
          ),
        }}
      />
    </Menu.Navigator>
  );
}

export default MenuNavigator;
