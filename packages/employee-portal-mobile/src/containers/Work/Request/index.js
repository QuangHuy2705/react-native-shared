import connect from '~/shared/redux/connect';

import Request from '~/components/Work/Request';
import { Actions } from '~/shared/redux/modules/work/requests';

const mapStateToProps = (state) => ({
  requests: state.requests
});

const mapDispatchToProps = {
  getRequests: Actions.getRequests,
  submitLeave: Actions.submitLeave
};

const ConnectedRequest = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Request);

export default ConnectedRequest;
