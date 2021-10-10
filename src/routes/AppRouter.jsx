import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes, routes } from './routes';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => {

  const auth = false;

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/*auth && */ privateRoutes.map(({ path, component }) =>
          (
            <Route exact path={path} component={component} />
          )
        )}
        {publicRoutes.map(({ path, component }) =>
          (
            <Route exact key={path} path={path} component={component} />
          )
        )}
        <Redirect to={routes.main} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter