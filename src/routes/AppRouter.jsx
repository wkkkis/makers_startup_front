import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes, routes } from './routes';

const AppRouter = () => {

  const auth = false;

  return (
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
  )
}

export default AppRouter