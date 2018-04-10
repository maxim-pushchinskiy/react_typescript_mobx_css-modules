import * as React from 'react';
import { Route, Router } from 'react-router';
import AppComponent from './components/AppComponent';
import createBrowserHistory from 'history/createBrowserHistory';

const routes =
    <Router history={ createBrowserHistory() }>
        <Route path='/' component={ AppComponent }>
        </Route>
    </Router>;

export default routes;