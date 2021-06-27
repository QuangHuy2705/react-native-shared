import React, { useState } from 'react';

import styled from 'styled-components';

import { Dimensions } from 'react-native';

import View from '~/ui/primitives/View';
import ScrollView from '~/shared/components/common/ScrollView';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';
import Image from '~/ui/primitives/Image';

import BackIcon from '~/ui/common/Icon/Svg/BackIcon';
import LikeIcon from '~/ui/common/Icon/Svg/LikeIcon';
import ChatIcon from '~/ui/common/Icon/Svg/ChatIcon';

import ProfileBox from '~/components/common/Profile/ProfileBox';
import CommentList from '~/components/common/Comment/CommentList';
import CommentInput from '~/components/common/Comment/CommentInput';

const Container = styled(View)`
	flex: 1;
  background: #fff;
  margin-top: 8px;
  padding: 16px 0 4px 0;
`;

const ScrollViewContainer = styled(View)`
	flex: 1;
	flex-direction: column;
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

const _listComments = [
	{
		id: 1,
		commenter: {
			name: 'Phúc. Trần Quang',
			photo: 'https://i.pravatar.cc/50'
		},
		value: {
			textValue: 'Great! Nàng như một đoá hồng phai Hương sắc héo hon theo những ngày dài Cuộc tình đi qua trong em Mang bao tiếc nuối, trái tim vỡ tan',
			timer: '2021-06-26 04:11:11'
		}
	},
	{
		id: 2,
		commenter: {
			name: 'Phúc. Trần Quang',
			photo: 'https://i.pravatar.cc/50'
		},
		value: {
			textValue: 'Amazing! Nhặt lại từng cánh rụng rơi Nàng vẫn xót xa cho chính đời mình Vì người em yêu đã nói Dung nhan tuyệt vời nhất thế gian là em',
			timer: '2021-06-26 04:11:11'
		}
	},
	{
		id: 3,
		commenter: {
			name: 'Phúc. Trần Quang',
			photo: 'https://i.pravatar.cc/50'
		},
		value: {
			textValue: 'Good Job! Khi em như hoa nhạt màu Anh quên khi ta có nhau Những phút ân ái lần đầu Cho tim càng thêm nhói đau Dưới chân nàng (dưới chân nàng) Là cả tuổi xuân rơi theo mối tình',
			timer: '2021-04-18 12:34:56'
		}
	}
];

const user = {
	name: 'Your Name',
	photo: 'https://i.pravatar.cc/50'
}

function Item({ item, onBack }) {
	const { from, feed } = item;
	const { content, likes, comments, liked, photo } = feed;
	const [_liked, setLiked] = useState(liked);
	const [listComments, setListComments] = useState(_listComments);

	const onLike = function () {
		setLiked(!_liked);
	}

	const onComment = function (text) {
		const newComment = {
			commenter: user,
			value: {
				textValue: text,
				timer: new Date()
			}
		}
		setListComments([newComment, ...listComments]);
	}

	return (<Container>
		<RowContainer paddingLeft={8} alignItems="center">
			<Touchable onPress={onBack}>
				<BackIcon width={30} height={30} />
			</Touchable>
			<View width={8} />
			<ProfileBox profile={from} />
		</RowContainer>
		<ScrollViewContainer>
			<ScrollView>
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
					<Touchable onPress={() => onLike(item)}>
						<ActionGroup>
							<LikeIcon color={_liked ? '#F15A22' : '#000'} />
							<RegularText> {likes} Like</RegularText>
						</ActionGroup>
					</Touchable>
					<Touchable>
						<ActionGroup>
							<ChatIcon />
							<RegularText> {comments} Comment</RegularText>
						</ActionGroup>
					</Touchable>
				</ActionContainer>
				<CommentList comments={listComments} />
			</ScrollView>
		</ScrollViewContainer>
		<CommentInput user={user} onSubmit={onComment} />
	</Container>);
}

export default Item;
