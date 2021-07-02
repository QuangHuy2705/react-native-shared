import React, { useEffect, useRef } from 'react';

import ScrollView from '~/components/common/ScrollView';
import PostStatusBox from '~/containers/Home/Feed/PostStatusBox';
import FeedItem from './Item';
import CommentListBSheet from '~/components/common/Comment/CommentBottomSheet';

function Feed({ feed, getFeedItems }) {
	const { feedItems } = feed;

	function fetchFeedItems() {
		if (!feed.loading) {
			getFeedItems(feed.offset);
		}
	}

	useEffect(() => {
		getFeedItems(0);
	}, []);

	const refRBSheet = useRef();
	const onShowCommentRBSheet = (feedInfor) => {
		refRBSheet.current.open(feedInfor);
	}
	const onCloseCommentRBSheet = () => {
		refRBSheet.current.close();
	}

	return (<>
		<ScrollView onBottomScrolled={fetchFeedItems}>
			<PostStatusBox />
			{feedItems.map(item => (
				<FeedItem key={item.feedId} item={item} showCommentBS={onShowCommentRBSheet}/>
			))}
		</ScrollView>
		<CommentListBSheet theRef={refRBSheet}
			onDone={() => onCloseCommentRBSheet()}/>
	</>)
}

export default Feed;
