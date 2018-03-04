import ActionTypes from '../constants/ActionTypes';

let mockMessageList = [{id: 0, title: 'admin', owner: 'admin',number:2},
                       {id: 1, title: 'admin1', owner: 'admin',number:4}];

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

export function refreshMessage() {
    let data = mockMessageList.map(item=>{item.number=item.number+1;return item})
    return {
        type: ActionTypes.REFRESH_MESSAGE,
        payload: data,
    };
}
