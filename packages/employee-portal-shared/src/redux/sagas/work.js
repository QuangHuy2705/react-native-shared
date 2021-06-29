import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/work/tasks';

import Work from '../../services/work';

function* getTasks({ offset }) {
  try {
    const { tasks } = yield call(Work.getTasks, offset);
    yield put(Actions.getTasksSuccess(offset, tasks));
  } catch (error) {
    yield put(Actions.getTasksFailure(error.message));
  }
}

function* submitTaskReview({ taskId, taskType, status }) {
  try {
    yield call(Work.submitTaskReview, taskId, taskType, status);
    yield put(Actions.submitTaskReviewSuccess(taskId));
    yield put(Actions.getTasks(0));
  } catch (error) {
    yield put(Actions.submitTaskReviewFailure(taskId, error.message));
  }
}

export default function* watchWork() {
  yield takeEvery(Types.GET_TASKS, getTasks);
  yield takeEvery(Types.SUBMIT_TASK_REVIEW, submitTaskReview);
}
