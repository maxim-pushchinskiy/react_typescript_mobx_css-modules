import * as React from 'react';
import { Route, Router } from 'react-router';
import AppComponent from './components/AppComponent';
import customHistory from './utils/browser-history';

const routes =
    <Router history={ customHistory }>
        <Route path='/' component={ AppComponent }>
        </Route>
    </Router>;

export default routes;