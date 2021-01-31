import React from 'react';
import {Title} from '../typography';
import {StyleSheet, View} from 'react-native';

type Props = {
  title: string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function HeaderTitle(props: Props) {
  return (
    <View style={styles.container}>
      <Title>{props.title}</Title>
    </View>
  );
}

export default React.memo(HeaderTitle);
