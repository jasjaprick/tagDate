import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatPage from '../pages/ChatPage';
import SwipePage from '../pages/SwipePage';
import ChatNavigator from './ChatNavigator';
import TagDatePage from '../pages/TagDatePage';
import { colors } from '../../helpers/styles';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

type MenuParamList = {
  Date: undefined;
  Swipe: undefined;
  Chat: undefined;
  Profile: undefined;
  Logout: undefined;
};
const Menu = createDrawerNavigator<MenuParamList>();

const MenuNavigator = () => {
  return (
    <Menu.Navigator drawerStyle={{ backgroundColor: colors.green,  }} drawerContentOptions={{
      activeTintColor: '#fff'

    }}>
      <Menu.Screen name='Swipe' component={SwipePage} options={{
        drawerLabel:  'Swipe '
      }}/>
      <Menu.Screen name='Chat' component={ChatNavigator} />
      <Menu.Screen name='Profile' component={ProfilePage} />
      <Menu.Screen name='Logout' component={LoginPage} />
    </Menu.Navigator>
  );
};
export default MenuNavigator;
