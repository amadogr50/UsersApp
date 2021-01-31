import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './drawer-navigator';
import React from 'react';

const Navigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default Navigator;
