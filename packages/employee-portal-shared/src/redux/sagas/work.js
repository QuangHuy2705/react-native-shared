import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/work/tasks';
import { Actions as RqActions, Types as RqTypes } from '../modules/work/requests';

import Work from '../../services/work';

function* getTasks() {
  try {
    const { tasks } = yield call(Work.getTasks);
    yield put(Actions.getTasksSuccess(tasks));
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

function* getRequests({ offset }) {
  try {
    const { requests, users } = yield call(Work.getRequests, offset);
    console.log(requests, users);
    yield put(RqActions.getRequestsSuccess(offset, requests, users));
  } catch (error) {
    yield put(RqActions.getRequestsFailure(error.message));
  }
}

function* submitLeave({ type, startDate, endDate, description, registrationType }) {
  try {
    yield call(Work.submitLeave, type, startDate, endDate, description, registrationType);
    yield put(RqActions.submitLeaveSuccess());
    yield put(RqActions.getRequests(0));
  } catch (error) {
    yield put(RqActions.submitLeaveFailure(error.message));
  }
}

export default function* watchWork() {
  yield takeEvery(Types.GET_TASKS, getTasks);
  yield takeEvery(Types.SUBMIT_TASK_REVIEW, submitTaskReview);
  yield takeEvery(RqTypes.GET_REQUESTS, getRequests);
  yield takeEvery(RqTypes.SUBMIT_LEAVE, submitLeave);
}
