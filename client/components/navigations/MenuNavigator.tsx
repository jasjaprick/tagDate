import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../helpers/styles';
import ChatPage from '../pages/ChatPage';
import SwipePage from '../pages/SwipePage';
import ChatNavigator from './ChatNavigator';
import IndividualChatPage from '../pages/IndividualChatPage';

const Menu = createBottomTabNavigator();

function MenuNavigator() {
  return (
    <Menu.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.violet200,
        inactiveBackgroundColor: colors.violet,
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        keyboardHidesTabBar: true,
      }}
    >
      <Menu.Screen
        name='Swipe'
        component={SwipePage}
        options={{
          tabBarIcon: () => <AntDesign name='heart' size={24} color='white' />,
        }}
      />
      <Menu.Screen
        name='Chat'
        component={ChatNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name='chatbox-ellipses-sharp' size={24} color='white' />
          ),
        }}
      />
      <Menu.Screen
        name='Profile'
        component={ChatPage}
        options={{
          tabBarIcon: () => (
            <Ionicons name='person-circle-sharp' size={24} color='white' />
          ),
        }}
      />
    </Menu.Navigator>
  );
}

export default MenuNavigator;
