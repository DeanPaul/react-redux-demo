import {combineReducers} from 'redux';
import MessageBoard from './MessageBoard';
import Todo from './Todo';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    MessageBoard,
    Todo,
    routing: routerReducer
});

export default rootReducer;
