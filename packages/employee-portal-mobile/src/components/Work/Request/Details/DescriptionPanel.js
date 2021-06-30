import React from 'react';

import styled from 'styled-components';

import Text from '~/ui/primitives/Text';

import Panel from './Panel';

const ItemText = styled(Text)`
  color: #000;
  font-size: 14px;
  border-bottom-width: 0;
  padding: 0 8px 16px 16px;
`;

function DescriptionPanel({ title = 'Description', value = '', onChange }) {
  return (
    <Panel title={title}>
      <ItemText>{value}</ItemText>
    </Panel>
  );
}

export default DescriptionPanel;
