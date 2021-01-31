import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../components/common';
import {Body} from '../../components/typography';
import colors from '../../theme/colors';
import dimensions from '../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: dimensions.s,
    borderRadius: dimensions.s,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    marginRight: dimensions.s,
  },
  iconContainer: {
    padding: dimensions.s,
    backgroundColor: colors.secondary,
    borderRadius: 48,
    marginBottom: dimensions.s,
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

type Props = {
  album: {
    userId: number,
    id: number,
    title: string,
    onPress?: Function,
  },
};

function AlbumItem(props: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconContainer}>
        <Icon name="image" size={48} />
      </View>
      <Body style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {props.album.title}
      </Body>
    </TouchableOpacity>
  );
}

export default AlbumItem;
