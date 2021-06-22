import React from 'react';

import styled from 'styled-components';

import Text from '~/ui/primitives/Text';

import Panel from './Panel';

const ItemText = styled(Text)`
  color: #828282;
  font-size: 14px;
  padding: 0 8px 16px 16px;
`;

function DescriptionPanel() {
  return (
    <Panel title="Description">
      <ItemText>Enter reason</ItemText>
    </Panel>
  );
}

export default DescriptionPanel;
