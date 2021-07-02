import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Avatar from '../Profile/Avatar';
import Text from '~/ui/primitives/Text';
import ExternalLink from '~/components/common/ExternalLink';
import ThumbnailsGrid from '~/components/common/ThumbnailsGrid';
import { convertTimeSince } from '~/shared/utils/function';

const Container = styled(View)`
	flex: 1;
	flex-direction: row;
	padding: 8px;
`;

const ColBlock = styled(View)`
	flex-direction: column;
	padding: 0 12px;
	flex-shrink: 1;
	width: 100%;
`;

const UserName = styled(Text)`
	font-size: 13px;
	font-weight: bold;
	height: 20px;
`;

const CommentText = styled(Text)`
	font-size: 13px;
`;

const Timer = styled(Text)`
	font-size: 12px;
	color: #919191;
`;

export function CommentItem({ comment }) {
	return (
		<Container>
			<Avatar size={40} source={{
				uri: comment.fromUser ? comment.fromUser.avatar : '',
				text: comment.fromUser ? comment.fromUser.displayName : '' }} />
			<ColBlock>
				<UserName>{comment.fromUser ? comment.fromUser.displayName : 'Unknown User'}</UserName>
				<CommentText>{comment.message}</CommentText>
				{comment.attachment && comment.attachment.link &&
				<ExternalLink link={comment.attachment.link} viewFullHeight={false} />}
				{comment.attachment && comment.attachment.image &&
				<ThumbnailsGrid thumbnails={comment.attachment.image} numOfImgs={3} oneRow={true} />}
				<Timer>{convertTimeSince(comment.createdDate)}</Timer>
			</ColBlock>
		</Container>
	)
}

function CommentList({ comments }) {
	return (
		<>
			{comments.map((comment, index) => {
				return (
					<CommentItem key={comment.commentId + index} comment={comment} />
				);
			})}
		</>
	);
}

export default CommentList;
