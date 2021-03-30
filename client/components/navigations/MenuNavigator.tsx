import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatPage from '../pages/ChatPage';
import SwipePage from '../pages/SwipePage';
import ChatNavigator from './ChatNavigator';
import TagDatePage from '../pages/TagDatePage';
export type MenuParamList = {
  Date: undefined;
  Swipe: undefined;
  Chat: undefined;
  Profile: undefined;
};
const Menu = createDrawerNavigator<MenuParamList>();
const MenuNavigator = () => {
  return (
    <Menu.Navigator>
      <Menu.Screen name='Swipe' component={SwipePage} />
      <Menu.Screen name='Chat' component={ChatNavigator} />
      <Menu.Screen name='Profile' component={ChatPage} />
    </Menu.Navigator>
  );
};

// function MenuNavigator() {
//   return (
//     <Menu.Navigator
//       tabBarOptions={{
//         activeBackgroundColor: colors.violet200,
//         inactiveBackgroundColor: colors.violet,
//         activeTintColor: 'white',
//         inactiveTintColor: 'white',
//         keyboardHidesTabBar: true,
//       }}
//     >
//       <Menu.Screen
//         name='Swipe'
//         component={SwipePage}
//         options={{
//           tabBarIcon: () => <AntDesign name='heart' size={24} color='white' />,
//         }}
//       />
//       <Menu.Screen
//         name='Chat'
//         component={ChatNavigator}
//         options={{
//           tabBarIcon: () => (
//             <Ionicons name='chatbox-ellipses-sharp' size={24} color='white' />
//           ),
//         }}
//       />
//       <Menu.Screen
//         name='Profile'
//         component={ChatPage}
//         options={{
//           tabBarIcon: () => (
//             <Ionicons name='person-circle-sharp' size={24} color='white' />
//           ),
//         }}
//       />
//     </Menu.Navigator>
//   );
// }

export default MenuNavigator;
