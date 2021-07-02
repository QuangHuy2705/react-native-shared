import connect from '~/shared/redux/connect';

import Notification from '~/components/Notification';
import { Actions } from '~/shared/redux/modules/notification';

const mapStateToProps = (state) => ({
  userId: state.auth.token.userId,
  notification: state.notification
});

const mapDispatchToProps = {
  getNotifications: Actions.getNotifications,
};

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);

export default ConnectedNotification;
