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
 * ## MODULEA Reducers
 */
export default createReducer(initialState, {

  /**
   * Request REQUEST_MODULEA_TOKEN
   */
  [ActionTypes.REQUEST_MODULEA_TOKEN]: (state) =>
    Object.assign({}, state, {
      isProcessing: true,
    }),

  /**
   * Receive RECEIVE_MODULEA_TOKEN
   */
  [ActionTypes.RECEIVE_MODULEA_TOKEN]: (state, payload, meta) => {
    const documentPermissions = payload.permissions || [];
    return Object.assign({}, state, {
      isProcessing: false,
      data: documentPermissions,

    });
  },
});
