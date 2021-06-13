
import React from 'react';

import styled, { css } from 'styled-components';
import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import { Heading4 as Text } from '~/ui/primitives/Text';

const TabButtonContainer = styled(Touchable)`
    margin: 4px 5px;
    border-radius: 7px;
    flex: 0.5;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    ${props => props.isActive && css`
      background: white;
    `}
`;

const TabButtonWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TabButtonText = styled(Text)`
  margin: 0 0 0 6px;
  color: #828282;
  font-size: 16px;

  ${props => props.isActive && css`
      color: #000000;
  `}
`;

function TabButton({ isActive, tab, onPress }) {
  return (
    <TabButtonContainer
      isActive={isActive}
      onPress={() => onPress(tab)}
    >
      <TabButtonWrapper style={{ flexDirection: 'row' }}>
        {tab.icon && (
          <tab.icon color={isActive ? '#000000' : '#828282'} />
        )}
        <TabButtonText isActive={isActive}>
          {tab.text}
        </TabButtonText>
      </TabButtonWrapper>
    </TabButtonContainer>
  );
}

TabButton.defaultProps = {
  isActive: false
};

export default TabButton;
