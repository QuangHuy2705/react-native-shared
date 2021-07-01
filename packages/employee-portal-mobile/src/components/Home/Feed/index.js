import React, { useEffect } from 'react';

import ScrollView from '~/components/common/ScrollView';
import PostStatusBox from '~/containers/Home/Feed/PostStatusBox';
import FeedItem from './Item';

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

	return (
		<ScrollView onBottomScrolled={fetchFeedItems}>
			<PostStatusBox />
			{feedItems.map(item => (
				<FeedItem key={item.feedId} item={item} />
			))}
		</ScrollView>
	)
}

export default Feed;
