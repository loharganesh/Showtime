import React from 'react';

// Components
import {View, StyleSheet} from 'react-native';

const Component = ({width, height}) => {
  return <View style={{width, height}}></View>;
};

export const ListItemSeparator = React.memo(Component);
