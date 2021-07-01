import React from 'react';

import styled from 'styled-components';
import moment from 'moment'

import Touchable from '~/ui/primitives/Touchable';
import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import DropdownIcon from '~/ui/common/Icon/Svg/DropdownIcon';

import RadioIcon from '~/ui/common/Icon/Svg/RadioIcon';

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
  margin: 0 8px 0 0;
  padding-top: 2px;
  ${({ isActive }) => isActive && `
    font-weight: bold;
  `}
`;

function RegistrationDetailPanel({ items, types, onChangeTypes }) {
  const selectableTypes = [
    { id: 1, text: 'All day' },
    { id: 2, text: 'Morning shift' },
    { id: 3, text: 'Afternoon shift' },
  ];

  function updateType(itemId, type) {
    const oldType = types[itemId] || { ...selectableTypes[0], isOpen: false }
    const mergedType = { ...oldType, ...type };
    onChangeTypes({ ...types, [itemId]: mergedType });
  }

  return (
    <Panel title="Registration details">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        const type = types[item.id] || { ...selectableTypes[0], isOpen: false };

        return (
          <React.Fragment key={item.id}>
            <Touchable
              onPress={() => updateType(item.id, { isOpen: !type.isOpen })}
            >
              <Item isLast={isLast || type.isOpen}>
                <ItemText style={{ flex: 1 }}>{item.name}</ItemText>
                <ItemText>{type.text}</ItemText>
                <DropdownIcon />
              </Item>
            </Touchable>

            {type.isOpen && selectableTypes.map((t, ti) => (
              <Touchable key={t.id} onPress={() => updateType(item.id, { ...t, isOpen: false })}>
                <Item isLast={isLast || ti < selectableTypes.length}>
                  <Filled style={{ paddingLeft: 16 }}>
                    <ItemText isActive={type.id === t.id}>{t.text}</ItemText>
                  </Filled>
                  <RadioIcon isActive={type.id === t.id} />
                </Item>
              </Touchable>
            ))}
          </React.Fragment>
        )
      })}
    </Panel>
  );
}

export default RegistrationDetailPanel;
