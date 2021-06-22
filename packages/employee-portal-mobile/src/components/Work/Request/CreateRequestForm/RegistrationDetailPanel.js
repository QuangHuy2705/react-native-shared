import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import DropdownIcon from '~/ui/common/Icon/Svg/DropdownIcon';
import TickSquareIcon from '~/ui/common/Icon/Svg/TickSquareIcon';

import Panel from './Panel';

const Item = styled(View)`
    flex-direction: row;
    padding: 8px 16px;
    align-items: center;

    ${({ isLast }) => !isLast && `
      border-color: #A7A7A77A;
      border-bottom-width: 0.5px;
    `}
`;

const Filled = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const ItemText = styled(Text)`
  color: #000;
  font-size: 14px;
  margin: 0 8px;
  padding-top: 2px;
`;

function RegistrationDetailPanel() {
  const items = [
    { name: "Jan 23, 2021", value: "All day" },
    { name: "Jan 24, 2021", value: "All day" },
    { name: "Jan 25, 2021", value: "All day" },
    { name: "Jan 26, 2021", value: "All day" },
    { name: "Jan 27, 2021", value: "All day" }
  ];

  return (
    <Panel title="Registration details">
      {items.map((i, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <Item key={i.name} isLast={isLast}>
            <Filled>
              <TickSquareIcon />
              <ItemText>{i.name}</ItemText>
            </Filled>
            <ItemText>{i.value}</ItemText>
            <DropdownIcon />
          </Item>
        )
      })}
    </Panel>
  );
}

export default RegistrationDetailPanel;
