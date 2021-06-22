import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import { Heading3 as Heading } from '~/ui/primitives/Text';

import LeaveIcon from '~/ui/common/Icon/Svg/LeaveIcon';
import WfhIcon from '~/ui/common/Icon/Svg/WfhIcon';

import Item from './Item';

export const RequestItems = {
  annualLeave: {
    id: 'annual-leave',
    title: 'Annual Leave',
    category: 'Annual Leave',
    descriptions: [
      { id: 'text', text: 'Your current leave is' },
      { id: 'value', text: ' 20.5 days', style: { fontWeight: 'bold' } }
    ],
    icon: LeaveIcon,
  },
  wfh: {
    id: 'wfh',
    title: 'Work from home',
    category: 'Work from home',
    description: 'Work remotely without the need for a company',
    icon: WfhIcon,
  }
};

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

function CreateRequestPanel({ onCreateRequest }) {
  const items = [RequestItems.annualLeave, RequestItems.wfh];

  return (
    <Container>
      <Title>Create Request</Title>
      {items.map((i, idx) => (
        <Item
          isLast={idx === items.length - 1}
          key={i.id}
          item={i}
          onPress={() => onCreateRequest(i)}
        />
      ))}
    </Container>
  );
}

export default CreateRequestPanel;
