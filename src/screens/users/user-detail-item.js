import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Body, Label} from '../../components/typography';
import {Icon} from '../../components/common';
import dimensions from '../../theme/dimensions';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  rootContainer: {
    padding: dimensions.s,
    backgroundColor: colors.surface,
    marginBottom: dimensions.s,
    borderRadius: dimensions.s,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    marginTop: dimensions.s,
  },
  contentContainer: {
    flex: 1,
    marginLeft: dimensions.s,
  },
});

type Props = {
  label: string,
  title: string,
  icon: String,
  onPress?: Function,
  bottom?: React.Node,
};

function UserDetailItem(props: Props) {
  const {label, title, icon, onPress, bottom} = props;

  return (
    <TouchableOpacity style={styles.rootContainer} onPress={onPress}>
      <View style={styles.topContainer}>
        <Icon name={icon} />
        <View style={styles.contentContainer}>
          <Label>{label}</Label>
          <Body>{title}</Body>
        </View>
      </View>
      {bottom && <View style={styles.bottomContainer}>{bottom}</View>}
    </TouchableOpacity>
  );
}

export default UserDetailItem;
