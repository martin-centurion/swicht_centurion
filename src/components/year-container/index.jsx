import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const YearContainer = ({ year }) => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.number}>{year}</Text>
    </View>
  );
};

export default YearContainer;
