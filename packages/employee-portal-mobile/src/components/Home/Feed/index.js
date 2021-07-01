import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';

import Blank from '~/components/Blank';
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
			{feedItems.length === 0 && (
				<Blank
					style={{
						marginTop: 8,
						backgroundColor: '#FFFFFF',
						height: Dimensions.get('window').height - 320
					}}
					title="No Feed Item"
				/>
			)}
		</ScrollView>
	)
}

export default Feed;
