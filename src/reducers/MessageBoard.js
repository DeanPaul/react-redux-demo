import {createReducer} from '../utils/index';
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
     * Request REQUEST_MESSAGE_LIST
     */
    [ActionTypes.REQUEST_MESSAGE_LIST]: (state) =>
        Object.assign({}, state, {
            isProcessing: true,
        }),

    /**
     * Receive RECEIVE_MESSAGE_LIST
     */
    [ActionTypes.RECEIVE_MESSAGE_LIST]: (state, payload, meta) => {
        return Object.assign({}, state, {
            isProcessing: false,
            data: payload,

        });
    },
});
