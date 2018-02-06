import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute,browserHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux';
import Portal from "./containers/Portal/Portal";
import { createBrowserHistory } from 'history';
// import "babel-polyfill";
class App extends React.Component {
    render(){ // Every react component has a render method.
        return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <div>
                Hello World
            </div>
        );
    }
}
function getViewComponent(query) {
    switch (query) {
        case 'viewer':
        case 'designer':
        default:
            return Portal;
    }
}


const table = (location, cb) => {
    require.ensure([], (require) => {
        cb(null, require('./containers/Portal/Portal').default)
    }, 'table')
}


const store = configureStore({

});
// const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(createBrowserHistory(), store);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}
                >
            <Route path="/" component={App}>
                <Route path="/table" getComponent={table} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
// ReactDOM.render(<App />, document.getElementById('app'));

