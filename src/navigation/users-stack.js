import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import ROUTES from './routes';
import React from 'react';
import {UserDetail, UsersList} from '../screens';

const Stack = createNativeStackNavigator();

const UsersStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={ROUTES.USERS_LISTS} component={UsersList} />
    <Stack.Screen name={ROUTES.USER_DETAIL} component={UserDetail} />
  </Stack.Navigator>
);

export default UsersStack;
