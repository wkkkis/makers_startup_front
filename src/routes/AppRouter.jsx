import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import { privateRoutes, publicRoutes, routes } from './routes';

const AppRouter = () => {

  const auth = false;

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {auth && privateRoutes.map(({ path, component }) =>
          (
            <Route exact path={path} component={component} />
          )
        )}
        {publicRoutes.map(({ path, component }) =>
          (
            <Route exact path={path} component={component} />
          )
        )}
        <Redirect to={routes.main} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter