import ROUTES from './routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import UsersStack from './users-stack';
import Dashboard from '../screens/dashboard/dashboard';
import {UsersList} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name={ROUTES.DASHBOARD} component={UsersList} />
    <Drawer.Screen name={ROUTES.USERS} component={UsersStack} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
