import * as React from 'react';
import { Route, Router, IndexRoute, Redirect } from 'react-router';
import AppComponent from "./components/AppComponent";
import customHistory from "./utils/browser-history";

export default (
    <Router history={ customHistory }>
        <Route path="/" component={ AppComponent }>

        </Route>
    </Router>
);