/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	logIn: ['uname', 'password'],
	logInByAzure: ['azureToken'],
	logInSuccess: ['uname', 'token'],
	logInFailure: ['error'],
	logOut: null,
}, { prefix: '@AUTH/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	isSignedIn: false,
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.LOG_IN]: (state) => produce(state, draft => {
		draft.loading = true;
	}),

	[Types.LOG_IN_BY_AZURE]: (state) => produce(state, draft => {
		draft.loading = true;
	}),

	[Types.LOG_IN_SUCCESS]: (state) => produce(state, draft => {
		draft.isSignedIn = true;
		draft.loading = false;
		draft.error = null;
	}),

	[Types.LOG_IN_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.loading = false;
		draft.error = error;
	}),

	[Types.LOG_OUT]: () => INITIAL_STATE,
});

/* eslint-enable no-param-reassign */
