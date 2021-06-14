import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

const Container = styled(View)`
	background: transparent;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

function Event() {
  return (
    <Container>
      <Text>EVENT SCREEN</Text>
    </Container>
  )
}

export default Event;
