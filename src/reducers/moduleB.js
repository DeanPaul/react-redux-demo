import { createReducer } from '../utils/index';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
  isProcessing: false,
  data: [],
  access: {
    canRead: false,
    canModify: false,
    canUpdate: false,
    canDelete: false,
    canChange: false,
  },
};



/**
 * ## MODULEB Reducers
 */
export default createReducer(initialState, {

  /**
   * Request REQUEST_MODULEB_TOKEN
   */
  [ActionTypes.REQUEST_MODULEB_TOKEN]: (state) =>
    Object.assign({}, state, {
      isProcessing: true,
    }),

  /**
   * Receive RECEIVE_MODULEB_TOKEN
   */
  [ActionTypes.RECEIVE_MODULEB_TOKEN]: (state, payload, meta) => {
    const documentPermissions = payload.permissions || [];
    return Object.assign({}, state, {
      isProcessing: false,
      data: documentPermissions,

    });
  },
});
