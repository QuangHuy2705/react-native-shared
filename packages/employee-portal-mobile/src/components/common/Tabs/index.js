import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import TabButton from './TabButton';

const TabsContainer = styled(View)`
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #F2F2F2;
`;

function Tabs({ tab, tabs, onTabChange }) {
  return (
    <TabsContainer>
      {tabs.map(t => (
        <TabButton
          isActive={tab.id === t.id}
          key={t.id}
          tab={t}
          onPress={() => onTabChange(t)}
        />
      ))}
    </TabsContainer>
  );
}

export default Tabs;
