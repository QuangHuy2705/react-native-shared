import { combineReducers } from 'redux';
import appReducer from './app';
import authReducer from './auth';
import userReducer from './user';
import tasksReducer from './work/tasks';
import feedReducer from './home/feed';
import eventsReducer from './home/events';
import groupReducer from './group/group'
import requestsReducer from './work/requests';

const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	user: userReducer,
	tasks: tasksReducer,
	feed: feedReducer,
	events: eventsReducer,
	groups: groupReducer,
	requests: requestsReducer,
});

export default rootReducer;
