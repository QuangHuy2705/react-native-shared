import React from 'react';

import { StatusBar, Platform, Dimensions } from 'react-native';

import styled from 'styled-components';
import View from '~/ui/primitives/View';

const IOS_STATUS_BAR_HEIGHT = 20;
const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;

const Container = styled(View)`
    background: transparent;
    width: ${Dimensions.get('window').width}px;
    height: ${24 + STATUS_BAR_HEIGHT}px;
`;

export default function SafeSpace() {
  return <Container />
}
