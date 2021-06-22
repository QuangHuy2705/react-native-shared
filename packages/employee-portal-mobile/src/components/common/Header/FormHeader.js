import React from 'react';

import { StatusBar, Platform } from 'react-native';

import styled from 'styled-components';
import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';

import Text, { Heading3 as Heading } from '~/ui/primitives/Text';
import SafeSpace from '~/components/common/SafeSpace';

const Container = styled(View)`
    background: #fff;
    padding: 8px 16px 16px 16px;
`;

const TopContainer = styled(View)`
    flex-direction: row;
`;

const ActionContainer = styled(Touchable)`
    margin: 0 4px;
`;

const TitleContainer = styled(View)`
  flex: 1;
  flex-direction: column;
`;

const Title = styled(Heading)`
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  padding: 0;
  margin: 0;
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
      <SafeSpace />
      <TopContainer>
        <ActionContainer onPress={leftAction.onPress}>
          <leftAction.icon />
        </ActionContainer>
        <TitleContainer>
          <Title>
            {children}
          </Title>
          <SubTitle>{subTitle}</SubTitle>
        </TitleContainer>
        <ActionContainer onPress={() => rightAction.isActive && rightAction.onPress}>
          <ActionText isActive={rightAction.isActive}>
            {rightAction.text}
          </ActionText>
        </ActionContainer>
      </TopContainer>
    </Container>
  );
}

export default FormHeader;
