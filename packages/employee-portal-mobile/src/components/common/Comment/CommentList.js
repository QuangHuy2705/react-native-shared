import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Avatar from '../Profile/Avatar';
import Text from '~/ui/primitives/Text';
// import { convertTimeSince } from '~/shared/utils/function';

const Container = styled(View)`
	flex: 1;
	flex-direction: row;
	padding: 8px;
`;

const ColBlock = styled(View)`
	flex-direction: column;
	padding: 0 12px;
	flex-shrink: 1;
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

export function CommentItem({ comment, index }) {
	return (
		<Container>
			<Avatar width="40" height="40" source={{ uri: comment.commenter.photo }} />
			<ColBlock>
				<UserName>{comment.commenter.name}</UserName>
				<CommentText>{comment.value.textValue}</CommentText>
				<Timer>1 hour ago</Timer>
				{/* <Timer>{convertTimeSince(comment.value.timer)}</Timer> */}
			</ColBlock>
		</Container>
	)
}

function CommentList({ comments }) {
	return (
		<>
			{comments.map((comment, index) => {
				return (
					<CommentItem key={comment.id} comment={comment} index={index} />
				);
			})}
		</>
	);
}

export default CommentList;
