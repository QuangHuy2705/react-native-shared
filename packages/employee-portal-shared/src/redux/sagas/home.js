import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/home/feed';

import Home from '../../services/home';

function* getFeedItems({ offset }) {
	try {
		const feedItems = yield call(Home.getFeedItems, offset);
		yield put(Actions.getFeedItemsSuccess(offset, feedItems));
	} catch (error) {
		yield put(Actions.getFeedItemsFailure(error.message));
	}
}

export default function* watchWork() {
	yield takeEvery(Types.GET_FEED_ITEMS, getFeedItems);
}
