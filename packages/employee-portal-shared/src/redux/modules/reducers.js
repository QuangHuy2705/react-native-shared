import { combineReducers } from 'redux';
import appReducer from './app';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	user: userReducer,
});

export default rootReducer;
