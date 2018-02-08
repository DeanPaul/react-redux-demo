import ActionTypes from '../constants/ActionTypes';

/**
 * request a todo list
 */
export function requestTodoList() {
    return {
        type: ActionTypes.REQUEST_TODO_LIST,

    };
}

/**
 * response a todo list
 * @param {Object} data
 */
export function responseTodoList(data) {
    return {
        type: ActionTypes.RECEIVE_TODO_LIST,
        payload: data,
    };
}
