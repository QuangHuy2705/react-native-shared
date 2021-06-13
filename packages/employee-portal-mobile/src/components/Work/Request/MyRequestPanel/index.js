import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import { Heading3 as Heading } from '~/ui/primitives/Text';

import RequestCircleIcon from '~/ui/common/Icon/Svg/RequestCircleIcon';

import Item from './Item';

const Container = styled(View)`
    padding: 12px 16px;
    background: #FFF;
    margin-top: 16px;
`;

const Title = styled(Heading)`
  font-weight: 500;
  padding: 0;
  margin: 0 0 16px 0;
`;

function ItemList() {
  const items = [
    {
      id: 'annual-leave',
      title: 'Annual Leave',
      descriptions: [
        { id: 'action', text: 'Waiting' },
        { id: 'user', text: ' Tu. Le Thanh ', style: { fontWeight: 'bold', color: '#F15A22' } },
        { id: 'detail', text: 'for approval.' }
      ],
    },
    {
      id: 'wfh',
      title: 'Work from home',
      descriptions: [
        { id: 'action', text: 'Waiting' },
        { id: 'user', text: ' Tu. Le Thanh ', style: { fontWeight: 'bold', color: '#F15A22' } },
        { id: 'detail', text: 'For approval.' }
      ],
    }
  ];

  return (
    <Container>
      <Title>My Request</Title>
      {items.map((i, idx) => (
        <Item
          isLast={idx === items.length - 1}
          key={i.id}
          item={{
            ...i,
            icon: () => (
              <RequestCircleIcon isActive={idx === 0} />
            )
          }}
          onPress={() => { }}
        />
      ))}
    </Container>
  );
}

export default ItemList;
