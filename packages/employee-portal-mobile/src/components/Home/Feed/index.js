import React from 'react';

import FeedList from './List';
import FeedDetail from './Detail';

function Feed() {
  const [detail, showFeedDetail] = React.useState(null);

  return (
    <>
      <FeedList onViewFeed={showFeedDetail} />
      {detail && <FeedDetail item={detail} onClose={() => showFeedDetail(null)} />}
    </>
  )
}

export default Feed;
