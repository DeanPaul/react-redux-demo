import ActionTypes from '../constants/ActionTypes';
export function increase(n) {
  return {
    type: ActionTypes.INCREASE,
    payload:{amount: n}
  }
}

export function decrease(n) {
  return {
    type: ActionTypes.DECREASE,
    payload:{amount: n}
  }
}
