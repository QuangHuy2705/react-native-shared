/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	getUserById: ['userId'],
	getUserByIdFailure: ['userId', 'error'],
	getUserByDomain: ['userDomain'],
	getUserByDomainFailure: ['userDomain', 'error'],
	getUserSuccess: ['user'],
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

	[Types.GET_USER_BY_ID_FAILURE]: (state, { userId, error }) => produce(state, draft => {
		draft[userId] = { ...draft[userId], loading: false, error };
	}),

	[Types.GET_USER_BY_DOMAIN]: (state, { userDomain }) => produce(state, draft => {
		// Keep existed user if existed
		draft[userDomain] = { ...draft[userDomain], loading: true };
	}),

	[Types.GET_USER_BY_ID_FAILURE]: (state, { userDomain, error }) => produce(state, draft => {
		draft[userDomain] = { ...draft[userDomain], loading: false, error };
	}),

	[Types.GET_USER_SUCCESS]: (state, { user }) => produce(state, draft => {
		const nUser = {
			...user,
			name: user.displayName,
			photo: user.avatar
		};
		draft[user.userId] = nUser;
		draft[user.domain] = nUser;
	}),
});

/* eslint-enable no-param-reassign */
