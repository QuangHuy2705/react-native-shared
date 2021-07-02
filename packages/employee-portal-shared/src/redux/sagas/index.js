import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import app from './app';
import auth from './auth';
import user from './user';
import work from './work';
import home from './home';
import group from './group'
import notification from './notification'

/* ------------- Watchers ------------- */
export default function* root() {
	yield all([
		yield fork(app),
		yield fork(auth),
		yield fork(user),
		yield fork(work),
		yield fork(home),
		yield fork(group),
		yield fork(notification),
	]);
}
