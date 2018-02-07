import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import { syncHistoryWithStore } from 'react-router-redux';
import Portal from "./containers/Portal/Portal";
import { App, Home, Foo, Bar } from './components'
//import { createBrowserHistory } from 'history';//fix react-router 4.x issue


const store = configureStore({

});
 const history = syncHistoryWithStore(browserHistory, store);
//const history = syncHistoryWithStore(createBrowserHistory(), store); //fix react-router 4.x issue
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="foo" component={Foo}/>
                <Route path="bar" component={Bar}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
// ReactDOM.render(<App />, document.getElementById('app'));

