import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import Image from '~/ui/primitives/Image';
import Touchable from '~/ui/primitives/Touchable';
import LikeIcon from '~/ui/common/Icon/Svg/LikeIcon';
import ChatIcon from '~/ui/common/Icon/Svg/ChatIcon';
import Profile2ProfileBox from '~/components/common/Profile/Profile2ProfileBox';
import ExternalLink from '~/components/common/ExternalLink';
import ThumbnailsGrid from '~/components/common/ThumbnailsGrid';
import { convertTimeSince } from '~/shared/utils/function';

const Container = styled(View)`
  background: #fff;
  margin-top: 8px;
  padding: 16px 0 4px 0;
`;

const RegularText = styled(Text)`
  font-size: 14px;
  padding-top: 1px;
`;

const Paragraph = styled(Text)`
  color: #000;
  font-size: 14px;
  padding: 4px 16px 8px 16px;
`;

const RowContainer = styled(View)`
  flex-direction: row;
  min-height: 40px;
`;

const ActionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 12px 12px 10px 12px;
`;

const ActionGroup = styled(View)`
  flex-direction: row;
  margin-right: 32px;
`;

const getLocation = (item) => {
	switch (true) {
		case (!!item.toGroupId):
			return {
				Id: item.toGroupId,
				name: item.toGroup.name
			};
		default:
			return {
				Id: '',
				name: ''
			};
	}
}

function Item({ item, showCommentBS }) {
	const fromUser = {
		name: item.fromUser.displayName,
		photo: item.fromUser.avatar,
		description: convertTimeSince(item.createdTime)
	};

	const toLocation = getLocation(item);

	const onViewFeed = (item) => {
		console.log(JSON.stringify(item));
	}

	return (<Container>
		<RowContainer paddingLeft={16}>
			<Profile2ProfileBox from={fromUser} to={toLocation} />
		</RowContainer>
		<RowContainer>
			<Paragraph>{item.message}</Paragraph>
		</RowContainer>
		{item.attachment && item.attachment.link &&
		<RowContainer>
			<ExternalLink link={item.attachment.link}
				viewFullHeight={!Boolean(item.attachment.image.length > 0)}/>
		</RowContainer>}
		{item.attachment && item.attachment.image &&
		<RowContainer>
			<ThumbnailsGrid thumbnails={item.attachment.image} numOfImgs={5} />
		</RowContainer>}
		<ActionContainer>
			<Touchable onPress={() => onViewFeed(item)}>
				<ActionGroup>
					<LikeIcon color={'#F15A22'} />
					<RegularText> {item.likes_number} Like</RegularText>
				</ActionGroup>
			</Touchable>
			<Touchable onPress={() => showCommentBS(item)}>
				<ActionGroup>
					<ChatIcon />
					<RegularText> {item.comments_number} Comment</RegularText>
				</ActionGroup>
			</Touchable>
		</ActionContainer>
	</Container>);
}

export default Item;
