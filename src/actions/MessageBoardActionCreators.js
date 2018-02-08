import ActionTypes from '../constants/ActionTypes';

/**
 * request a message list
 */
export function requestMessageList() {
    return {
        type: ActionTypes.REQUEST_MESSAGE_LIST,

    };
}

/**
 * receive a message list
 * @param {Object} data
 */
export function receiveMessageList(data) {
    return {
        type: ActionTypes.RECEIVE_MESSAGE_LIST,
        payload: data,
    };
}
