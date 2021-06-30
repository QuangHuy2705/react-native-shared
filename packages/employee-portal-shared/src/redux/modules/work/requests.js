/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	getRequests: ['offset'],
	getRequestsSuccess: ['offset', 'requests', 'users'],
	getRequestsFailure: ['error'],
	submitLeave: ['type', 'startDate', 'endDate', 'description', 'registrationType'],
	submitLeaveSuccess: [],
	submitLeaveFailure: ['error'],
}, { prefix: '@WORK-REQUEST/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	loading: false,
	offset: 0,
	items: [],
	loading: false
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.GET_REQUESTS]: (state) => produce(state, draft => {
		draft.loading = true;
		draft.error = null;
	}),

	[Types.GET_REQUESTS_SUCCESS]: (state, { offset, requests, users }) => produce(state, draft => {
		const items = offset === 0 ? requests : [...draft.items, ...requests];
		draft.items = items;
		draft.users = users;
		draft.offset = items.length;
		draft.loading = false;
		draft.error = null;
	}),

	[Types.GET_REQUESTS_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.loading = false;
		draft.error = error;
	}),

	[Types.SUBMIT_LEAVE]: (state) => produce(state, draft => {
		draft.leave = { submitting: true };
	}),

	[Types.SUBMIT_LEAVE_SUCCESS]: (state) => produce(state, draft => {
		draft.leave = null;
	}),

	[Types.SUBMIT_LEAVE_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.leave = { error };
	}),
});

/* eslint-enable no-param-reassign */
