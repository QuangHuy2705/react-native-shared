import React from 'react';

import { Dimensions } from 'react-native';

import { ScrollView } from 'react-native';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

function AppScrollView({ spacing = 232, onBottomScrolled, children }) {
  const height = Dimensions.get('window').height - spacing;
  return (
    <ScrollView
      style={{ width: '100%', height }}
      onScroll={({ nativeEvent }) => {
        if (onBottomScrolled && isCloseToBottom(nativeEvent)) {
          onBottomScrolled();
        }
      }}
      scrollEventThrottle={400}
    >
      {children}
    </ScrollView>
  )
}

export default AppScrollView;
