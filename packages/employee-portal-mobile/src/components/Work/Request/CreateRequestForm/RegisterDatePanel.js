import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

import Panel from './Panel';

const Item = styled(View)`
    flex-direction: row;
    padding: 8px 16px;
    align-items: center;
    justify-content: space-between;

    ${({ isLast }) => !isLast && `
      border-color: #A7A7A77A;
      border-bottom-width: 0.5px;
    `}
`;

const ItemText = styled(Text)`
  color: #000;
  font-size: 14px;
  
  ${({ isLast }) => isLast && `
    font-weight: 500;
  `}
`;

function RegisterDatePanel() {
  const items = [
    { name: "Start", value: "Jan 23, 2021" },
    { name: "End", value: "Jan 24, 2021" },
    { name: "Total", value: "1 day" },
  ];

  return (
    <Panel title="Register date">
      {items.map((i, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <Item key={i.name} isLast={isLast}>
            <ItemText isLast={isLast}>{i.name}</ItemText>
            <ItemText isLast={isLast}>{i.value}</ItemText>
          </Item>
        )
      })}
    </Panel>
  );
}

export default RegisterDatePanel;
