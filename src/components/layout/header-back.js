import React, {useCallback} from 'react';
import {Icon} from '../common';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../theme/colors';
import dimensions from '../../theme/dimensions';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: dimensions.l,
    padding: dimensions.xxs,
  },
});

function HeaderBack() {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="keyboard-arrow-left" />
    </TouchableOpacity>
  );
}

export default HeaderBack;
