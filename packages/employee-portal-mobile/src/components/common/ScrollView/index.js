import React from 'react';

import { Dimensions } from 'react-native';

import { ScrollView } from 'react-native';

function AppScrollView({ spacing = 232, children }) {
  const height = Dimensions.get('window').height - spacing;
  return (
    <ScrollView style={{ width: '100%', height }}>
      {children}
    </ScrollView>
  )
}

export default AppScrollView;
