import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/user';

import User from '../../services/user';

function* getUserById({ userId }) {
  try {
    const user = yield call(User.getUserById, userId);
    yield put(Actions.getUserByIdSuccess(user));
  } catch (error) {
    yield put(Actions.getUserByIdFailure(userId, error.message));
  }
}

export default function* watchUser() {
  yield takeEvery(Types.GET_USER_BY_ID, getUserById);
}
