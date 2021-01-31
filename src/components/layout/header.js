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
  headerLeft: {},
  headerCenter: {
    flex: 1,
    marginHorizontal: dimensions.s,
  },
});

type Props = {
  headerLeft?: React.Node,
  headerCenter?: React.Node,
};

function Header(props: Props) {
  const {headerLeft, headerCenter} = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>{headerLeft}</View>
      <View style={styles.headerCenter}>{headerCenter}</View>
    </View>
  );
}

export default Header;
