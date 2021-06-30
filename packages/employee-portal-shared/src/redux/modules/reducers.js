import { combineReducers } from 'redux';
import appReducer from './app';
import authReducer from './auth';
import userReducer from './user';
import tasksReducer from './work/tasks';
import feedReducer from './home/feed';

const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	user: userReducer,
	tasks: tasksReducer,
	feed: feedReducer
});

export default rootReducer;
