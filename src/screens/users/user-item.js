import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import type {User} from '../../types/users';
import dimensions from '../../theme/dimensions';
import colors from '../../theme/colors';
import {Label, Subtitle} from '../../components/typography';
import {Icon} from '../../components/common';

type Props = {
  user: User,
  onPress: Function,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    flexDirection: 'row',
    padding: dimensions.s,
    marginHorizontal: dimensions.s,
    borderRadius: dimensions.s,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {},
  button: {},
});

function UserItem(props: Props) {
  const {user, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Subtitle>{user.name}</Subtitle>
        <Label>{user.email}</Label>
      </View>
      <Icon name="keyboard-arrow-right" />
    </TouchableOpacity>
  );
}

export default UserItem;
