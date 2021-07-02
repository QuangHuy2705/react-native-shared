/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
  getNotifications: ['userId', 'offset'],
  getNotificationsSuccess: ['offset', 'notifications'],
  getNotificationsFailure: ['error']
}, { prefix: '@NOTIFICATIONS/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  loading: false,
  offset: 0,
  items: [],
  error: false
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
  [Types.GET_NOTIFICATIONS]: (state) => produce(state, draft => {
    draft.loading = true;
    draft.error = null;
  }),

  [Types.GET_NOTIFICATIONS_SUCCESS]: (state, { offset, notifications }) => produce(state, draft => {
    const items = offset === 0 ? notifications : [...draft.items, ...notifications];
    draft.items = items;
    draft.offset = items.length;
    draft.loading = false;
    draft.error = null;
  }),

  [Types.GET_NOTIFICATIONS_FAILURE]: (state, { error }) => produce(state, draft => {
    draft.loading = false;
    draft.error = error;
  }),
});

/* eslint-enable no-param-reassign */
