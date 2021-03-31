import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SwipePage from '../pages/SwipePage';
import ChatNavigator from './ChatNavigator';
import { colors } from '../../helpers/styles';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import MatchSuccessPage from '../pages/MatchSuccessPage';

type MenuParamList = {
  Date: undefined;
  Swipe: undefined;
  Chat: undefined;
  Profile: undefined;
  LogOut: undefined;
  MatchSuccessPage: undefined;
};
const Menu = createDrawerNavigator<MenuParamList>();

const MenuNavigator = () => {
  return (
    <Menu.Navigator drawerStyle={{ backgroundColor: colors.green,  }}  drawerContentOptions={{
      activeTintColor: '#fff'
    }}>
      <Menu.Screen name='Swipe' component={SwipePage} />
      <Menu.Screen name='MatchSuccessPage' component={MatchSuccessPage} />
      <Menu.Screen name='Chat' component={ChatNavigator} />
      <Menu.Screen name='Profile' component={ProfilePage} />
      <Menu.Screen name='LogOut' component={LoginPage} />
    </Menu.Navigator>
  );
};
export default MenuNavigator;
