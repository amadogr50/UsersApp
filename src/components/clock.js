import React, {useState} from 'react';
import {View, ViewProps} from 'react-native';
import {Body} from './typography';
import {useInterval} from '../hooks';
import {getTime} from '../modules/time';

function Clock(props: ViewProps) {
  const [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <View {...props}>
      <Body>{`${time.hours} : ${time.minutes} : ${time.seconds}`}</Body>
    </View>
  );
}

export default Clock;
