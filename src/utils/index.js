/**
 * Convert declarative reducer to standard reducer
 * @function createReducer
 * @access public
 * @param {Object} initialState
 * @param {Object} reducerMap
 * @returns {Object}
 */
export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];
        return reducer ? reducer(state, action.payload, action.meta) : state;
    };
}

/**
 * Creating an object with values equal to its keys
 * @function keyMirror
 * @access public
 * @param {Object} obj
 * @returns {Object}
 */
export function keyMirror(obj) {
    Object.keys(obj).forEach(key => Object.assign(obj, {[key]: key}));
    return obj;
}