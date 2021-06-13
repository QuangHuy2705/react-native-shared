import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import Touchable from '~/ui/primitives/Touchable';
import ApproveIcon from '~/ui/common/Icon/Svg/ApproveIcon';
import RejectIcon from '~/ui/common/Icon/Svg/RejectIcon';
import CommentIcon from '~/ui/common/Icon/Svg/CommentIcon';

import ProfileBox from '~/components/common/Profile/ProfileBox'
import Tag from '~/components/common/Tag'

const Container = styled(View)`
  background: #fff;
  margin-top: 8px;
  padding: 16px;
`;

const RowContainer = styled(View)`
  flex-direction: row;
  padding: 7px 0 8px 0;
`;

const Label = styled(Text)`
  font-size: 16px;
`;

const RegularText = styled(Text)`
  color: #A7A7A7;
  font-size: 16px;
`;

const StrongText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
`;

const ActionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-color: #A7A7A77A;
  border-top-width: 0.5px;
  padding: 16px 0 4px 0;
  margin-top: 8px;
`;

const ActionGroup = styled(View)`
  flex-direction: row;
`;

function TaskItem({ item, onComment, onApprove, onReject }) {
  const { owner, task } = item;
  const { category, descriptions, sums } = task;
  return (<Container>
    <RowContainer marginBottom={16}>
      <ProfileBox profile={owner} />
      <Tag variant='warn'>{category}</Tag>
    </RowContainer>
    {descriptions.map(d => (
      <RowContainer key={d.id}>
        <Label>{d.label}: </Label>
        <RegularText>
          {d.text}
        </RegularText>
      </RowContainer>
    ))}
    <RowContainer justifyContent="space-between">
      {sums.map(s => (<StrongText key={s.id}>{s.text}</StrongText>))}
    </RowContainer>
    <ActionContainer>
      <Touchable onPress={() => onComment(item)}>
        <ActionGroup>
          <CommentIcon />
          <RegularText> 3 comments</RegularText>
        </ActionGroup>
      </Touchable>
      <Touchable onPress={() => onApprove(item)}>
        <ActionGroup>
          <RejectIcon />
          <StrongText> Reject</StrongText>
        </ActionGroup>
      </Touchable>
      <Touchable onPress={() => onReject(item)}>
        <ActionGroup>
          <ApproveIcon />
          <StrongText> Approve</StrongText>
        </ActionGroup>
      </Touchable>
    </ActionContainer>
  </Container>);
}

export default TaskItem;
