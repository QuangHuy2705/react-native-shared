
import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';
import SafeSpace from '~/components/common/SafeSpace';

import BackIcon from '~/ui/common/Icon/Svg/BackIcon';

const Container = styled(View)`
	padding: 8px 16px;
	align-items: center;
  flex-direction: row;
  background: #FFF;
  margin-bottom: 8px;
`;

const Title = styled(Text)`
  font-size: 24px;
  margin-left: 8px;
  background: #fff;
`;

export default function Header() {
  const navigation = useNavigation();

  return (
    <>
      <SafeSpace />
      <Container>
        <Touchable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Touchable>
        <Title>Notifications</Title>
      </Container>
    </>
  )
}
