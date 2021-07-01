import connect from '~/shared/redux/connect';

import Feed from '~/components/Home/Feed';
import { Actions } from '~/shared/redux/modules/home/feed';

const mapStateToProps = (state) => ({
	feed: state.feed
});

const mapDispatchToProps = {
	getFeedItems: Actions.getFeedItems
};

const ConnectedFeed = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Feed);

export default ConnectedFeed;