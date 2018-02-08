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
 * ## Todo Reducers
 */
export default createReducer(initialState, {

    /**
     * Request REQUEST_TODO_LIST
     */
    [ActionTypes.REQUEST_TODO_LIST]: (state) =>
        Object.assign({}, state, {
            isProcessing: true,
        }),

    /**
     * Receive RECEIVE_TODO_LIST
     */
    [ActionTypes.RECEIVE_TODO_LIST]: (state, payload, meta) => {
        return Object.assign({}, state, {
            isProcessing: false,
            data: payload,

        });
    },
});
