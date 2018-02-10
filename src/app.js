import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {syncHistoryWithStore} from 'react-router-redux';
import {App, Home} from './components'
//import { createBrowserHistory } from 'history';//fix react-router 4.x issue
import {Todo, MessageBoard} from './containers'
import Immutable from 'immutable';
const store = configureStore(Immutable.Map({}));
//const history = syncHistoryWithStore(browserHistory, store);


const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState (state) {
        return state.get('routing')
    }
})
//const history = syncHistoryWithStore(createBrowserHistory(), store); //fix react-router 4.x issue
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="todo" component={Todo}/>
                <Route path="message" component={MessageBoard}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
