import connect from '~/shared/redux/connect';

import Task from '~/components/Work/Task';
import { Actions } from '~/shared/redux/modules/work/tasks';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  getTasks: Actions.getTasks,
  submitTaskReview: Actions.submitTaskReview
};

const ConnectedTask = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

export default ConnectedTask;
