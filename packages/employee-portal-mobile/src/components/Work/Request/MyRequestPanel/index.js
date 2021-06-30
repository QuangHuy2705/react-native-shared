import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import { Heading3 as Heading } from '~/ui/primitives/Text';

import RequestCircleIcon from '~/ui/common/Icon/Svg/RequestCircleIcon';

import Item from './Item';

const Container = styled(View)`
    padding: 12px 16px;
    background: #FFF;
    margin-top: 8px;
`;

const Title = styled(Heading)`
  font-weight: bold;
  font-size: 17px;
  padding: 0;
  margin: 0 0 16px 0;
`;

function getDescriptions(request, users) {
  const hlStyle = { fontWeight: 'bold', color: '#F15A22' };
  const owner = users[request.createdDomain] || {};
  const manager = owner.lineManagerName || 'CEO';
  if (request.status === 1) {
    return [
      { id: 'action', text: 'Waiting' },
      { id: 'user', text: ` ${manager} `, style: hlStyle },
      { id: 'detail', text: 'for approval.' }
    ];
  }
  return [
    { id: 'action', text: request.status === 2 ? 'Approved by' : 'Rejected by' },
    { id: 'user', text: ` ${manager} `, style: hlStyle }
  ];
}

function ItemList({ requests: { requests, users }, onViewDetails }) {
  const items = requests.map(r => {
    const title = r.type === 'LEAVE'
      ? 'Annual Leave'
      : 'Work from home';
    const descriptions = getDescriptions(request, users);
    return { ...r, id: r.requestId, title, descriptions };
  });

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
              <RequestCircleIcon isActive={i.status === 1} />
            )
          }}
          onPress={() => onViewDetails(i)}
        />
      ))}
    </Container>
  );
}

export default ItemList;
