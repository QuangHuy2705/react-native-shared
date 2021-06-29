import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';

import TaskItem from './TaskItem';

const Container = styled(View)`
	background: transparent;
`;

function getDesc(text) {
  if (!text || text.trim() === '') {
    return null;
  }

  const parts = text.split(':');
  if (parts.length > 1) {
    const label = parts[0].trim();
    const content = text.replace(`${parts[0]}:`, '').trim();
    return { id: label, label, text: content };
  }
  return { id: text, label: null, text };
}

function getCategory(type) {
  switch (type) {
    case 1:
      return 'Payment';
    case 2:
    case 4:
    default:
      return 'Annual Leave';
  }
}

function getItems({ items }) {
  return items.map((i, idx) => ({
    id: `${idx}-${i.taskId}`,
    ownerDomain: i.createdDomain,
    task: {
      id: i.taskId,
      type: i.type,
      category: getCategory(i.type),
      descriptions: [
        getDesc(i.message),
        getDesc(i.content)
      ].filter(m => !!m),
      sums: [
        i.optionValue1,
        i.optionValue2,
      ].filter(s => !!s)
        .map(s => ({ id: s, text: s }))
    },
  }));
}

function Feed({ tasks, onApprove, onReject, onComment }) {
  const items = getItems(tasks);

  return (
    <Container>
      {items.map(i => (
        <TaskItem
          key={i.id}
          item={i}
          onApprove={() => onApprove(i)}
          onReject={() => onReject(i)}
          onComment={() => onComment(i)}
        />
      ))}
    </Container>
  )
}

export default Feed;
