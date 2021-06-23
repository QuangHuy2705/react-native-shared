import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import watchApp from './app';
import watchAuth from './auth';

/* ------------- Watchers ------------- */
export default function* root() {
	yield all([
		yield fork(watchApp),
		yield fork(watchAuth),
	]);
}
