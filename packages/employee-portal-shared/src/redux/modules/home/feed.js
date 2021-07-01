/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	getFeedItems: ['offset'],
	getFeedItemsSuccess: ['offset', 'feedItems'],
	getFeedItemsFailure: ['error']
}, { prefix: '@HOME-FEED/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	loading: false,
	offset: 0,
	feedItems: [],
	error: false
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.GET_FEED_ITEMS]: (state) => produce(state, draft => {
		draft.loading = true;
		draft.error = null;
	}),

	[Types.GET_FEED_ITEMS_SUCCESS]: (state, { offset, feedItems }) => produce(state, draft => {
		const items = offset === 0 ? feedItems : [...draft.feedItems, ...feedItems];
		draft.feedItems = items;
		draft.offset = items.length;
		draft.loading = false;
		draft.error = null;
	}),

	[Types.GET_FEED_ITEMS_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.loading = false;
		draft.error = error;
	}),
});

/* eslint-enable no-param-reassign */
