/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	getUserById: ['userId'],
	getUserByIdSuccess: ['user'],
	getUserByIdFailure: ['userId', 'error'],
}, { prefix: '@USER/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	loading: false,
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.GET_USER_BY_ID]: (state, { userId }) => produce(state, draft => {
		// Keep existed user if existed
		draft[userId] = { ...draft[userId], loading: true };
	}),

	[Types.GET_USER_BY_ID_SUCCESS]: (state, { user }) => produce(state, draft => {
		draft[user.userId] = user;
	}),

	[Types.GET_USER_BY_ID_FAILURE]: (state, { userId, error }) => produce(state, draft => {
		draft[userId] = { ...draft[userId], loading: false, error };
	}),

});

/* eslint-enable no-param-reassign */
