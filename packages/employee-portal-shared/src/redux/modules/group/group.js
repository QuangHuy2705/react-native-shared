/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	getGroupList: null,
	getGroupListSuccess: ['groupList'],
	getGroupListFailure: ['error'],
}, { prefix: '@GROUP-GROUP_LIST/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	loading: false,
	items: [],
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.GET_GROUP_LIST]: (state) => produce(state, draft => {
		draft.loading = true;
		draft.error = null;
	}),

	[Types.GET_GROUP_LIST_SUCCESS]: (state, { groupList }) => produce(state, draft => {
		const items = groupList
		draft.items = items;
		draft.loading = false;
		draft.error = null;
	}),

	[Types.GET_GROUP_LIST_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.loading = false;
		draft.error = error;
	}),
});

/* eslint-enable no-param-reassign */
