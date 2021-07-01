import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/group/group';

import Group from '../../services/group';

function* getGroupList() {
  try {
    const { groups: groupList } = yield call(Group.getGroupList);
    yield put(Actions.getGroupListSuccess(groupList));
  } catch (error) {
    yield put(Actions.getGroupListFailure(error.message));
  }
}

export default function* watchWork() {
  yield takeEvery(Types.GET_GROUP_LIST, getGroupList);
}
