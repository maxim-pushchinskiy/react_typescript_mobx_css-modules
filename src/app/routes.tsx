import * as React from 'react';
import { Route, Router } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import customHistory from './utils/browser-history';

const routes: any =
    <Router history={ customHistory }>
        <Route path='/' component={ HomePage }>
        </Route>
    </Router>;

export default routes;