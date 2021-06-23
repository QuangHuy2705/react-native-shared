import React from 'react';

import styled from 'styled-components';

import { Dimensions } from 'react-native';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';
import Image from '~/ui/primitives/Image';

import BackIcon from '~/ui/common/Icon/Svg/BackIcon';
import LikeIcon from '~/ui/common/Icon/Svg/LikeIcon';
import ChatIcon from '~/ui/common/Icon/Svg/ChatIcon';

import ProfileBox from '~/components/common/Profile/ProfileBox'
import CommentBox from './CommentBox';

const Container = styled(View)`
  background: #fff;
  margin-top: 8px;
  padding: 16px 0 4px 0;
`;

const PhotoRatio = 400 / 200;
const Photo = styled(Image)`
  width: ${Dimensions.get('window').width}px;
  min-height: ${Dimensions.get('window').width / PhotoRatio}px;
`;

const RegularText = styled(Text)`
  font-size: 14px;
  padding-top: 1px;
`;

const Paragraph = styled(Text)`
  color: #000;
  font-size: 14px;
  padding: 8px 16px;
`;

const RowContainer = styled(View)`
  flex-direction: row;
  min-height: 40px;
`;

const ActionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 12px 12px 10px 12px;
  border-color: #A7A7A77A;
  border-bottom-width: 0.5px;
`;

const ActionGroup = styled(View)`
  flex-direction: row;
  margin-right: 32px;
`;

function Item({ item, onBack }) {
  const { from, feed } = item;
  const { content, likes, comments, liked, photo } = feed;
  return (<Container>
    <RowContainer paddingLeft={8} alignItems="center">
      <Touchable onPress={onBack}>
        <BackIcon width={30} height={30} />
      </Touchable>
      <View width={8} />
      <ProfileBox profile={from} />
    </RowContainer>
    <RowContainer>
      <Paragraph>{content}</Paragraph>
    </RowContainer>
    <RowContainer>
      <Photo
        source={{ uri: photo }}
        resizeMode="cover"
      />
    </RowContainer>
    <ActionContainer>
      <Touchable onPress={() => onComment(item)}>
        <ActionGroup>
          <LikeIcon color={liked ? '#F15A22' : '#000'} />
          <RegularText> {likes} Like</RegularText>
        </ActionGroup>
      </Touchable>
      <Touchable onPress={() => onApprove(item)}>
        <ActionGroup>
          <ChatIcon />
          <RegularText> {comments} Comment</RegularText>
        </ActionGroup>
      </Touchable>
    </ActionContainer>
    <CommentBox />
  </Container>);
}

export default Item;
