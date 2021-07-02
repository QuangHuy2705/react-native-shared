import connect from '~/shared/redux/connect';

import Event from '~/components/Home/Event';
import { Actions } from '~/shared/redux/modules/home/events';

const mapStateToProps = (state) => ({
	events: state.events
});

const mapDispatchToProps = {
	getEvents: Actions.getEvents
};

const ConnectedEvent = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Event);

export default ConnectedEvent;
