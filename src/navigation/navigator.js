import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './drawer-navigator';
import React from 'react';
import colors from '../theme/colors';

const Navigator = () => (
  <NavigationContainer
    theme={{
      colors: {
        background: colors.background,
        text: colors.onBackground,
      },
    }}>
    <DrawerNavigator />
  </NavigationContainer>
);

export default Navigator;
