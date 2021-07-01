/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	getEvents: ['date'],
	getEventsSuccess: ['date', 'events'],
	getEventsFailure: ['error']
}, { prefix: '@HOME-EVENT/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	loading: false,
	error: false
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.GET_EVENTS]: (state) => produce(state, draft => {
		draft.loading = true;
		draft.error = null;
	}),

	[Types.GET_EVENTS_SUCCESS]: (state, { date, events }) => produce(state, draft => {
		draft[date] = events;
		draft.loading = false;
		draft.error = null;
	}),

	[Types.GET_EVENTS_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.loading = false;
		draft.error = error;
	}),
});

/* eslint-enable no-param-reassign */
