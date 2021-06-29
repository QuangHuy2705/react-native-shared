import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/user';

import User from '../../services/user';

function* getUserById({ userId }) {
  try {
    const user = yield call(User.getUserById, userId);
    yield put(Actions.getUserSuccess(user));
  } catch (error) {
    yield put(Actions.getUserByIdFailure(userId, error.message));
  }
}

function* getUserByDomain({ userDomain }) {
  try {
    const user = yield call(User.getUserByDomain, userDomain);
    yield put(Actions.getUserSuccess(user));
  } catch (error) {
    yield put(Actions.getUserByDomainFailure(userDomain, error.message));
  }
}

export default function* watchUser() {
  yield takeEvery(Types.GET_USER_BY_ID, getUserById);
  yield takeEvery(Types.GET_USER_BY_DOMAIN, getUserByDomain);
}
