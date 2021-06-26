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

const MultiLineTextInput = styled(TextInput)`
	background: #f2f2f2;
	border-radius: 24px;
	border-bottom-width: 0;
	padding: 12px 12px;
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

function CommentInput({ user, onSubmit }) {
	const [text, setText] = useState('');
	const [inputHeight, setInputHeight] = useState(38);
	const { photo } = user;

	const onSend = function(text) {
		setText('');
		Keyboard.dismiss();
		onSubmit(text);
	}

	return (
		<Container>
			<UserAvatar>
				<Avatar width="40" height="40" source={{ uri: photo }} />
			</UserAvatar>
			<MultiLineTextInput
				value={text}
				onChange={setText}
				onContentSizeChange={(event) => setInputHeight(Math.max(38, event.nativeEvent.contentSize.height))}
				multiline={true}
				height={inputHeight}
				wrapperStyle={{ height: inputHeight, width: text === '' ? ('88%') : ('80%')}}
				placeholder='Write a comment'
			/>
			{(text !== '') &&
				(<IconButton
					onPress={() => onSend(text)}>
					<Icon name="send" width="36" height="36" />
				</IconButton>)}
		</Container>
	);
}

export default CommentInput;