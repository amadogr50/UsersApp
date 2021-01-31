import React, {useEffect, useState} from 'react';
import {View, ViewProps} from 'react-native';
import {Label} from './typography';

function Calendar(props: ViewProps) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().toDateString());
  }, []);

  return (
    <View {...props}>
      <Label>{date}</Label>
    </View>
  );
}

export default Calendar;
