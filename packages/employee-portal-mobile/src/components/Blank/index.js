import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import BlankIndicatorIcon from '~/ui/common/Icon/Svg/BlankIndicatorIcon';

const Container = styled(View)`
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Text)`
  font-size: 14px;
  margin-top: 16px;
  font-weight: bold;
  color: #BDBDBD;
`;

export default function Blank({ style, title }) {
  return (<Container style={style}>
    <BlankIndicatorIcon />
    <Title>{title}</Title>
  </Container>);
}
