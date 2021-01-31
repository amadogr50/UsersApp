import React from 'react';
import {StyleSheet, View} from 'react-native';
import dimensions from '../../theme/dimensions';

const styles = StyleSheet.create({
  separator: {
    width: dimensions.s,
  },
});

function HorizontalSeparator() {
  return <View style={styles.separator} />;
}

export default HorizontalSeparator;
