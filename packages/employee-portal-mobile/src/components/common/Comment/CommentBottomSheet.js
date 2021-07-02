import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Dimensions ,StatusBar, Platform, Keyboard, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import RBSheet from 'react-native-raw-bottom-sheet';

import Post from '~/shared/services/post';
import Container from '~/ui/layout/Container';
import ScrollView from '~/components/common/ScrollView';
import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const IOS_STATUS_BAR_HEIGHT = 40;
const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;
const screenHeight = Dimensions.get("screen").height;

const CContainer = styled(Container)`
	flex: 1;
`;

const Header = styled(View)`
	border-color: #F2F2F2;
	border-bottom-width: 0.5px;
	height: 44px;
`;

const Title = styled(Text)`
	margin: auto;
	font-size: 17px;
	font-weight: bold;
`;

const RightAction = styled(TouchableOpacity)`
	position: absolute;
	right: 12px;
	top: 0;
	height: 100%;
	justify-content: center;
`;

const ContentWrapper = styled(Container)`
	flex: 1;
	padding: 4px;
`;

const ScrollViewWrapper = styled(ScrollView)`
	padding: 4px;
`;

const LoadingComponent  = styled(View)`
	justify-content: center;
	align-items: center;
	height: 44px;
	flex-direction: row;
`;

function CommentListBSheet({ theRef, onDone }) {
	const [feed, setFeed] = useState({});
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [notCommentYet, setNotCommentYet] = useState(false);
	const [height, setHeight] = useState(screenHeight);
	const [marginBottom, setMarginBottom] = useState(0);

	const onClose = () => {
		setFeed({});
		setComments([]);
		setLoading(false);
		setNotCommentYet(false);
	}

	const onOpen = async (feedInfor) => {
		setFeed(feedInfor);
		if (!(feedInfor.comments_number > 0)) {
			setNotCommentYet("Be the first to comment");
			return;
		}
		setLoading(true);
		const newComments = await Post.getComments(feedInfor.feedId, comments.length);
		setComments([...comments, ...newComments]);
		setLoading(false);
	}

	const loadMoreComments = async () => {
		if (notCommentYet !== false) return;
		setLoading(true);
		const newComments = await Post.getComments(feed.feedId, comments.length);
		setComments([...comments, ...newComments]);
		setLoading(false);
	}

	const onSubmitComment = async ({value, user}) => {
		const comment = {
			feedId: feed.feedId,
			userId: user.userId,
			message: value
		};
		const result = await Post.postComment(comment);
		if (!!result) {
			const newComment = {
				commentId: result,
				fromUserId: user.userId,
				fromUser: user,
				message: value,
				attachment: null,
				createdTime: new Date().valueOf()
			}
			setComments([newComment, ...comments]);
			setNotCommentYet(false);
		} else {
			alert('Comment Failed!!!!!');
		}
	}

	const _keyboardDidShow = (event) => {
		setMarginBottom(event.endCoordinates.height);
		setHeight(height - marginBottom);
	}
	const _keyboardDidHide = () => {
		setMarginBottom(0);
		setHeight(screenHeight);
	}

	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
		Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
	
		// cleanup function
		return () => {
		  Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
		  Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
		};
	  }, []);

	return (
		<RBSheet
			ref={theRef}
			onOpen={(feedInfor) => onOpen(feedInfor)}
			onClose={() => onClose()}
			openDuration={250}
			dragFromTopOnly
			closeOnDragDown
			customStyles={{
				draggableIcon: { display: "none" },
				container: {
					height: screenHeight - STATUS_BAR_HEIGHT,
					marginTop: STATUS_BAR_HEIGHT,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20
				},
			}}>
			<CContainer marginBottom={marginBottom}>
				<Header>
					<Title>
						Comments
					</Title>
					<RightAction onPress={() => onDone()}>
						<Text fontSize='15px' fontWeight={700}>
							Done
						</Text>
					</RightAction>
				</Header>
				<ContentWrapper>
					<ScrollViewWrapper onBottomScrolled={loadMoreComments}>
						{(!!notCommentYet) && <Text>{notCommentYet}</Text>}
						<CommentList comments={comments}/>
						{(!!loading) &&
							<LoadingComponent>
								<ActivityIndicator size={'small'}/>
								<Text> Loading</Text>
							</LoadingComponent>
						}
					</ScrollViewWrapper>
					<CommentInput onSubmit={onSubmitComment}/>
				</ContentWrapper>
			</CContainer>
		</RBSheet>
	)
}

export default CommentListBSheet;