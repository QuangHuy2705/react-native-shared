import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';

import TaskItem from './TaskItem';

const Container = styled(View)`
	background: transparent;
`;

function Feed({ onApprove, onReject, onComment }) {
  const items = [
    {
      id: '1',
      owner: {
        id: '1',
        name: 'Doanh. Vo Thi My',
        photo: 'https://i.pravatar.cc/50',
        description: '2 hours'
      },
      task: {
        id: '1',
        category: 'Payment',
        descriptions: [
          { id: 'dsc', label: 'Description', text: 'VNG Office Phone charge in Jan 2021.' },
          { id: 'telco', label: 'Telco', text: 'VNPT. Subcription number. 0283 6221 468.' }
        ],
        sums: [{ id: '1', text: '15.000.000 VND' }, { id: '2', text: 'October , 2021 Expires' }]
      }
    },
    {
      id: '2',
      owner: {
        id: '2',
        name: 'Doanh. Vo Thi My',
        photo: 'https://i.pravatar.cc/100',
        description: '2 hours'
      },
      task: {
        id: '2',
        category: 'Annual Leave',
        descriptions: [
          { id: 'dsc', label: 'Description', text: 'Description: Taking care of a sick child.' },
        ],
        sums: [{ id: '1', text: 'Jan 23, 2021  >  Jan 27,2021' }, { id: '2', text: 'Total: 3 days' }]
      }
    },
    {
      id: '3',
      owner: {
        id: '3',
        name: 'Doanh. Vo Thi My',
        photo: 'https://i.pravatar.cc/100',
        description: '2 hours'
      },
      task: {
        id: '3',
        category: 'Purchase',
        descriptions: [
          { id: 'dsc', label: 'Description', text: 'VNG Office Phone charge in Jan 2021.' },
          { id: 'telco', label: 'Telco', text: 'VNPT. Subcription number. 0283 6221 468.' }
        ],
        sums: [{ id: '1', text: '15.000.000 VND' }, { id: '2', text: 'October , 2021 Expires' }]
      }
    },
  ];

  return (
    <Container>
      {items.map(i => (
        <TaskItem
          key={i.id}
          item={i}
          onApprove={onApprove}
          onReject={onReject}
          onComment={onComment}
        />
      ))}
    </Container>
  )
}

export default Feed;
