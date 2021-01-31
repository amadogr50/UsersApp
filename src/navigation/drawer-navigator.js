import ROUTES from './routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import UsersStack from './users-stack';
import {Dashboard} from '../screens';
import colors from '../theme/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: colors.background,
    }}
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
    <Drawer.Screen name={ROUTES.USERS} component={UsersStack} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
