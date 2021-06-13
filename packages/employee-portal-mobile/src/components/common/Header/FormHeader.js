import React from 'react';

import { StatusBar, Platform } from 'react-native';

import styled from 'styled-components';
import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';

import Text, { Heading3 as Heading } from '~/ui/primitives/Text';

const IOS_STATUS_BAR_HEIGHT = 20;
const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;

const Container = styled(View)`
    background: #fff;
    padding: ${24 + STATUS_BAR_HEIGHT}px 16px 16px 16px;
`;

const TopContainer = styled(View)`
    flex-direction: row;
`;

const ActionContainer = styled(Touchable)`
    margin: 0 4px;
`;

const Title = styled(Heading)`
  flex: 1;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  padding: 0;
  margin: 0 0 4px 0;
`;

const SubTitle = styled(Text)`
  color: #000;
  font-size: 14px;
  text-align: center;
  padding: 0;
`;

const ActionText = styled(Text)`
  font-weight: 500;
  font-size: 20px;
  color: #A7A7A7;
  ${({ isActive }) => isActive && `
    color: #F15A22;
  `}
`;

function FormHeader({ subTitle, children, leftAction, rightAction }) {
  return (
    <Container>
      <TopContainer>
        <ActionContainer onPress={leftAction.onPress}>
          <leftAction.icon />
        </ActionContainer>
        <Title>{children}</Title>
        <ActionContainer onPress={() => rightAction.isActive && rightAction.onPress}>
          <ActionText isActive={rightAction.isActive}>
            {rightAction.text}
          </ActionText>
        </ActionContainer>
      </TopContainer>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}

export default FormHeader;
