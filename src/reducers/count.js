

import { createReducer } from '../utils/index';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
  number: 1
};



/**
 * ## MODULEA Reducers
 */
export default createReducer(initialState, {

  /**
   * Request INCREASE
   */
  [ActionTypes.INCREASE]: (state, payload) =>
    Object.assign({}, state, {
      number: state.number +payload.amount,
    }),

  /**
   * Receive DECREASE
   */
  [ActionTypes.DECREASE]: (state, payload) => {
    return Object.assign({}, state, {
      number: state.number - payload.amount,
    });
  },
});
