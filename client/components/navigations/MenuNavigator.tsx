import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import colors from "../helpers/colors";
import iconHelper from "../helpers/iconHelper";
import LoginPage from "../pages/LoginPage";

const Menu = createBottomTabNavigator();

function MenuNavigator(props) {
  return (
    <Menu.Navigator
      tabBarOptions={
        {
          // activeBackgroundColor: colors.green200,
          // inactiveBackgroundColor: colors.green100,
          // activeTintColor: "white",
          // inactiveTintColor: "white",
        }
      }
    >
      <Menu.Screen
        name="Home"
        component={LoginPage}
        options={{
          tabBarIcon: () => iconHelper("Entypo", "home", 20, "white"),
        }}
      />
    </Menu.Navigator>
  );
}

export default MenuNavigator;
