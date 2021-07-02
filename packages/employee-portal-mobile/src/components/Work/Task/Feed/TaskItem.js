import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import Touchable from '~/ui/primitives/Touchable';
import ApproveIcon from '~/ui/common/Icon/Svg/ApproveIcon';
import RejectIcon from '~/ui/common/Icon/Svg/RejectIcon';
// import CommentIcon from '~/ui/common/Icon/Svg/CommentIcon';

import ProfileBox from '~/containers/common/Profile/ProfileBox'
import Tag from '~/components/common/Tag'

const Container = styled(View)`
  background: #fff;
  margin-top: 8px;
  padding: 16px;
`;

const RowContainer = styled(View)`
  flex-direction: row;
  padding: 4px 0 2px 0;
`;

const Label = styled(Text)`
  font-size: 14px;
`;

const RegularText = styled(Text)`
  color: #A7A7A7;
  font-size: 14px;
`;

const StrongText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
`;

const ActionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  border-color: #A7A7A77A;
  border-top-width: 0.2px;
  padding: 16px 0 0 0;
  margin-top: 16px;
`;

const ActionGroup = styled(View)`
  flex-direction: row;
  margin-right: 32px;
`;

function TaskItem({ item, onComment, onApprove, onReject }) {
  const { ownerDomain, task } = item;
  const { category, descriptions, sums } = task;
  return (<Container>
    <RowContainer marginBottom={12}>
      <ProfileBox userDomain={ownerDomain} />
      <Tag variant='warn'>{category}</Tag>
    </RowContainer>
    {descriptions.map(d => (
      <RowContainer key={d.id}>
        {d.label && (<Label>{d.label}: </Label>)}
        <RegularText>
          {d.text}
        </RegularText>
      </RowContainer>
    ))}
    <RowContainer justifyContent="space-between">
      {sums.map(s => (<StrongText key={s.id}>{s.text}</StrongText>))}
    </RowContainer>
    <ActionContainer>
      {/* <Touchable onPress={() => onComment(item)}>
        <ActionGroup>
          <CommentIcon />
          <RegularText> 3 comments</RegularText>
        </ActionGroup>
      </Touchable> */}
      <Touchable onPress={() => onReject(item)}>
        <ActionGroup>
          <RejectIcon />
          <StrongText style={{ marginLeft: 8 }}> Reject</StrongText>
        </ActionGroup>
      </Touchable>
      <Touchable onPress={() => onApprove(item)}>
        <ActionGroup>
          <ApproveIcon />
          <StrongText style={{ marginLeft: 8 }}> Approve</StrongText>
        </ActionGroup>
      </Touchable>
    </ActionContainer>
  </Container>);
}

export default TaskItem;
