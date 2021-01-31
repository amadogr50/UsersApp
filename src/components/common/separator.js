import React from 'react';
import {StyleSheet, View} from 'react-native';
import dimensions from '../../theme/dimensions';

const styles = StyleSheet.create({
  separator: {
    height: dimensions.s,
  },
});

function Separator() {
  return <View style={styles.separator} />;
}

export default Separator;
