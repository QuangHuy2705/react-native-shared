/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	getTasks: ['offset'],
	getTasksSuccess: ['offset', 'tasks'],
	getTasksFailure: ['error'],
	submitTaskReview: ['taskId', 'taskType', 'status'],
	submitTaskReviewSuccess: ['taskId'],
	submitTaskReviewFailure: ['taskId', 'error'],
}, { prefix: '@WORK-TASK/' });

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
	[Types.GET_TASKS]: (state) => produce(state, draft => {
		draft.loading = true;
		draft.error = null;
	}),

	[Types.GET_TASKS_SUCCESS]: (state, { offset, tasks }) => produce(state, draft => {
		const items = offset === 0 ? tasks : [...draft.items, ...tasks];
		draft.items = items;
		draft.offset = items.length;
		draft.loading = false;
		draft.error = null;
	}),

	[Types.GET_TASKS_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.loading = false;
		draft.error = error;
	}),

	[Types.SUBMIT_TASK_REVIEW]: (state, { taskId }) => produce(state, draft => {
		draft[taskId] = { submitting: true };
	}),

	[Types.SUBMIT_TASK_REVIEW_SUCCESS]: (state, { taskId }) => produce(state, draft => {
		draft[taskId] = null;
	}),

	[Types.SUBMIT_TASK_REVIEW_FAILURE]: (state, { taskId, error }) => produce(state, draft => {
		draft[taskId] = { error };
	}),
});

/* eslint-enable no-param-reassign */
