import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/auth';
import { Actions as UserActions } from '../modules/user';

import Api from '../../services/api';
import Auth from '../../services/auth';

function* logIn({ uname, password, azureToken }) {
  try {
    // Request Log In
    const { tokenId, tokenItem } = azureToken
      ? yield call(Auth.logInByAzure, azureToken)
      : yield call(Auth.logIn, uname, password);
    // After Log In
    yield call(Api.saveToken, tokenId);
    yield put(Actions.logInSuccess(tokenItem));
    yield put(UserActions.getUserById(tokenItem.userId));
  } catch (error) {
    yield put(Actions.logInFailure(error.message));
  }
}

export default function* watchAuth() {
  yield takeEvery(Types.LOG_IN, logIn);
  yield takeEvery(Types.LOG_IN_BY_AZURE, logIn);
}
