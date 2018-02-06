import ActionTypes from '../constants/ActionTypes';

/**
 * Shows a notification message
 * @param {Object} data
 */
export function showModuleABiz(data) {
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
export function hideModuleABiz() {
  return {
    type: ActionTypes.RECEIVE_MODULEA_TOKEN,
  };
}
