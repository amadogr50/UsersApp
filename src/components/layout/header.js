import React from 'react';
import {StyleSheet, View} from 'react-native';
import dimensions from '../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: dimensions.s,
  },
});

function Header({children}) {
  return <View style={styles.container}>{children}</View>;
}

export default Header;
