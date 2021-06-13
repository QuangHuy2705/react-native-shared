import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

const Container = styled(View)`
    background: #FFF;
    margin-top: 16px;
    flex-direction: column;
`;

const Title = styled(Text)`
  color: #000;
  font-weight: bold;
  font-size: 18px;
  padding: 16px;
`;

function Panel({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Panel;
