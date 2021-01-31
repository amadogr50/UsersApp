import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../common';
import {useNavigation} from '@react-navigation/core';
import dimensions from '../../theme/dimensions';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: dimensions.l,
    padding: dimensions.xxs,
  },
});

function HeaderMenu() {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="menu" />
    </TouchableOpacity>
  );
}

export default React.memo(HeaderMenu);
