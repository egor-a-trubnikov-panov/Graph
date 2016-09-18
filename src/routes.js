import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './containers/Layout';
import App from './containers/App';
import Detail from './containers/Detail';
import NotFound from './containers/NotFound';

/**
 * Please keep routes in alphabetical order
 */
const routes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={App} />
    <Route path='detail' component={Detail} />
    <Route path='*' component={NotFound} status={404} />
  </Route>
);

export default routes;
