import ActionTypes from '../constants/ActionTypes';

/**
 * Shows a notification message
 * @param {Object} data
 */
export function showModuleBBiz(data) {
  return {
    type: ActionTypes.REQUEST_MODULEB_TOKEN,
    payload: {
      message: data.message,
      description: data.description,
    },
  };
}

/**
 * Hides a notification message
 */
export function hideModuleBBiz() {
  return {
    type: ActionTypes.RECEIVE_MODULEB_TOKEN,
  };
}
