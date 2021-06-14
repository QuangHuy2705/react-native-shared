import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import SafeSpace from '~/components/common/SafeSpace';

import FeedItem from './Item';

const Container = styled(View)`
	background: #FFF;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

function Detail({ item, onClose }) {
  return (
    <Container>
      <SafeSpace />
      <FeedItem
        onBack={onClose}
        item={item}
      />
    </Container>
  )
}

export default Detail;
