import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import app from './app';
import auth from './auth';
import user from './user';
import work from './work';

/* ------------- Watchers ------------- */
export default function* root() {
	yield all([
		yield fork(app),
		yield fork(auth),
		yield fork(user),
		yield fork(work),
	]);
}
