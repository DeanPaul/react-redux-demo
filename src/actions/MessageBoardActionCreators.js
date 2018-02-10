import ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';

let mockMessageList = Immutable.fromJS([{id: 0, title: 'admin', owner: 'admin'}, {id: 1, title: 'admin1', owner: 'admin'}]);

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
    data = data || mockMessageList;
    return {
        type: ActionTypes.RECEIVE_MESSAGE_LIST,
        payload: data,
    };
}
