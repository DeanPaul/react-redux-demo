import { combineReducers } from 'redux';
import moduleA from './moduleA';
import moduleB from './moduleB';
import {routerReducer} from 'react-router-redux';
const rootReducer = combineReducers({
    moduleA,
    moduleB,
    routing:routerReducer
});

export default rootReducer;
