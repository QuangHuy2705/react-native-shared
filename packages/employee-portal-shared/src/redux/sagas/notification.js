import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/notification';

import Notification from '../../services/notification';

function* getNotifications({ userId, offset }) {
  try {
    const { notifications } = yield call(Notification.getNotifications, userId, offset);
    yield put(Actions.getNotificationsSuccess(offset, notifications));
  } catch (error) {
    yield put(Actions.getNotificationsFailure(error.message));
  }
}

export default function* watchNotification() {
  yield takeEvery(Types.GET_NOTIFICATIONS, getNotifications);
}
