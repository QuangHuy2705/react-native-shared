import React from 'react';

import { Dimensions } from 'react-native';

import { ScrollView } from 'react-native';

function AppScrollView({ children }) {
  const height = Dimensions.get('window').height - 232;
  return (
    <ScrollView style={{ width: '100%', height }}>
      {children}
    </ScrollView>
  )
}

export default AppScrollView;
