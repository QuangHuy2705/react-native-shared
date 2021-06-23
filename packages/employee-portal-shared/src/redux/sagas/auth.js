import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/auth';

import Api from '../../services/api';
import Auth from '../../services/auth';

function* logIn({ uname, password }) {
  try {
    const { tokenId } = yield call(Auth.logIn, uname, password);
    yield call(Api.saveToken, tokenId);
    yield put(Actions.logInSuccess());
  } catch (error) {
    yield put(Actions.logInFailure(error.message));
  }
}

export default function* watchAuth() {
  yield takeEvery(Types.LOG_IN, logIn);
}
