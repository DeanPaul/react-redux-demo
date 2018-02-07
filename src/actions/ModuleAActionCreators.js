import ActionTypes from '../constants/ActionTypes';

/**
 * Shows a notification message
 * @param {Object} data
 */
export function showModuleAMessage(data) {
    return {
        type: ActionTypes.REQUEST_MODULEA_TOKEN,
        payload: {
            message: data.message,
            description: data.description,
        },
    };
}

/**
 * Hides a notification message
 */
export function hideModuleAMessage() {
    return {
        type: ActionTypes.RECEIVE_MODULEA_TOKEN,
    };
}
