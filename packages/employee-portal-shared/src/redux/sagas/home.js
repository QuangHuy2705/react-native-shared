import { takeEvery, put, call } from 'redux-saga/effects';
import { Actions, Types } from '../modules/home/feed';

import { Actions as evActions, Types as evTypes } from '../modules/home/events';

import Home from '../../services/home';
import Event from '../../services/event';

function* getFeedItems({ offset }) {
	try {
		const feedItems = yield call(Home.getFeedItems, offset);
		yield put(Actions.getFeedItemsSuccess(offset, feedItems));
	} catch (error) {
		yield put(Actions.getFeedItemsFailure(error.message));
	}
}

function* getEvents({ date }) {
	try {
		const { events } = yield call(Event.getEvents, date);
		yield put(evActions.getEventsSuccess(date, events));
	} catch (error) {
		yield put(evActions.getEventsFailure(error.message));
	}
}

export default function* watchWork() {
	yield takeEvery(Types.GET_FEED_ITEMS, getFeedItems);
	yield takeEvery(evTypes.GET_EVENTS, getEvents);
}
