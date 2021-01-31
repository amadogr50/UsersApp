import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import React from 'react';
import type {IconProps} from 'react-native-vector-icons/index';
import dimensions from '../../theme/dimensions';
import colors from '../../theme/colors';

function Icon(props: IconProps) {
  return (
    <MaterialIcon size={dimensions.m} color={colors.onBackground} {...props} />
  );
}

export default Icon;
