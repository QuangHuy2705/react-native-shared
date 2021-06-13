import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import Touchable from '~/ui/primitives/Touchable';

const Container = styled(View)`
	background: #0000008A;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
  padding: 52px 16px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

const Block = styled(View)`
  background: #fff;
  margin-bottom: 8px;
  border-radius: 10px;
  width: 342px;
`;

const Line = styled(View)`
  width: 342px;
  height: 1px;
  background: #A7A7A7;
  opacity: 0.2;
`;

const Message = styled(Text)`
  padding: 16px 32px 20px 32px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const Action = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 16px 0;
`;

function ApproveForm({ action, onSubmit, onCancel }) {
  const isApprove = action === 'approve';
  return (
    <Container>

      <Block>
        <Message>
          Are you sure you want to
          {isApprove ? ' approve ' : ' reject '}
          this request?
        </Message>
        <Line />
        <Touchable onPress={onSubmit}>
          <Action color={isApprove ? '#27AE60' : '#EC2323'}>
            {isApprove ? 'Approve' : 'Reject'}
          </Action>
        </Touchable>
      </Block>
      <Block>
        <Touchable onPress={onCancel}>
          <Action flex={1}>Cancel</Action>
        </Touchable>
      </Block>
    </Container>
  )
}

export default ApproveForm;
