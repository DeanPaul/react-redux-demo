import { combineReducers } from 'redux';
import moduleA from './moduleA';
import moduleB from './moduleB';
import count from './count';
import {routerReducer} from 'react-router-redux';
const rootReducer = combineReducers({
    moduleA,
    moduleB,
    count,
    routing:routerReducer
});

export default rootReducer;
