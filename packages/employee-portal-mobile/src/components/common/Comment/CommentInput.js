import React, { useState } from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import TextInput from '~/ui/common/Form/TextInput';
import Avatar from '../Profile/Avatar';
import Icon from '~/ui/common/Icon';

const Container = styled(View)`
	flex-direction: row;
	min-height: 42px;
	padding: 8px;
	align-items: center;
`;

const UserAvatar = styled(View)`
	padding-right: 8px;
	width: 45px;
`;

const MultiLineInputContainer = styled(View)`
	background: #f2f2f2;
	border-radius: 24px;
	padding: 10px 12px;
	flex: 1;
	align-items: center;
`;

const MultiLineTextInput = styled(TextInput)`
	border-bottom-width: 0;
	font-size: 14px;
	line-height: 19px;
	${({ height }) => `height: ${height}px`}
`;

const IconButton = styled(TouchableOpacity)`
	width: 32px;
	max-height: 64px;
	margin: 8px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const MinInputHeight = 20;

function CommentInput({ user, onSubmit }) {
	const [text, setText] = useState('');
	const [inputHeight, setInputHeight] = useState(MinInputHeight);
	const { photo } = user;

	const onSend = function (text) {
		setText('');
		Keyboard.dismiss();
		onSubmit(text);
	}

	return (
		<Container>
			<UserAvatar>
				<Avatar width="40" height="40" source={{ uri: photo }} />
			</UserAvatar>
			<MultiLineInputContainer>
				<MultiLineTextInput
					value={text}
					onChange={setText}
					multiline
					onContentSizeChange={
						(event) => setInputHeight(event.nativeEvent.contentSize.height)
					}
					height={inputHeight}
					wrapperStyle={{ height: inputHeight, width: '100%' }}
					placeholder='Write a comment'
				/>
			</MultiLineInputContainer>
			{(text !== '') &&
				(<IconButton
					onPress={() => onSend(text)}>
					<Icon name="send" width="36" height="36" />
				</IconButton>)}
		</Container>
	);
}

export default CommentInput;