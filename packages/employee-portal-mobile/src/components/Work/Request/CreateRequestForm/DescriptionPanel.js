import React from 'react';

import styled from 'styled-components';

import TextInput from '~/ui/common/Form/TextInput';

import Panel from './Panel';

const ItemInput = styled(TextInput)`
  color: #828282;
  font-size: 14px;
  border-bottom-width: 0;
  padding: 0 8px 16px 16px;
`;

function DescriptionPanel({ description = '', onChange }) {
  return (
    <Panel title="Description">
      <ItemInput
        placeholder="Enter reason"
        value={description}
        onChange={onChange}
      />
    </Panel>
  );
}

export default DescriptionPanel;
