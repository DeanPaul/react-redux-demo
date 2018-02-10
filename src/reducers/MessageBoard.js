import {createReducer} from '../utils/index';
import ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map( {
    isProcessing: false,
    data: [],
    access: {
        canRead: false,
        canModify: false,
        canUpdate: false,
        canDelete: false,
        canChange: false,
    },
});


/**
 * ## MODULEA Reducers
 */
export default createReducer(initialState, {

    /**
     * Request REQUEST_MESSAGE_LIST
     */
    [ActionTypes.REQUEST_MESSAGE_LIST]: (state) =>
        state.set('isProcessing', true),

    /**
     * Receive RECEIVE_MESSAGE_LIST
     */
    [ActionTypes.RECEIVE_MESSAGE_LIST]: (state, payload, meta) => {
        return state.merge({
            isProcessing: false,
            data: payload
        });
    },
});
