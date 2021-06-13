import React from 'react';

import styled from 'styled-components';
import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

const Variants = {
  'default': {
    color: '#4F4F4F',
    background: '#F2F2F2'
  },
  'warn': {
    color: '#F15A22',
    background: '#F15A2240'
  }
}

const Container = styled(View)`
    padding: 4px 12px;
    background: #F2F2F2;
    border-radius: 24px;
    justify-content: center;
    align-items: center;

    ${({ variant }) => `background: ${Variants[variant].background}`}
`;

const TextContainer = styled(Text)`
  font-size: 14px;
  ${({ variant }) => `color: ${Variants[variant].color}`}
`;

function Tag({ variant = 'default', children }) {
  return (
    <Container variant={variant}>
      <TextContainer variant={variant}>{children}</TextContainer>
    </Container>
  );
}

export default Tag;
