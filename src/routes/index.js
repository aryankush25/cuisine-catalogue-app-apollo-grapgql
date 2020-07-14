import React from 'react';
import * as R from 'ramda';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import { isPresentLocalStorageTokens } from '../utils/tokensHelper';
import {
  ROOT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  HOME_ROUTE
} from '../utils/routesNavigationConstants';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import PageNotFound from './PageNotFound';

const routesConfig = {
  landing: {
    path: [ROOT_ROUTE],
    component: Landing,
    exact: true,
    privateRoute: false
  },
  login: {
    path: [LOGIN_ROUTE],
    component: Login,
    exact: true,
    privateRoute: false
  },
  register: {
    path: [REGISTER_ROUTE],
    component: Register,
    exact: true,
    privateRoute: false
  },
  home: {
    path: HOME_ROUTE,
    component: Home,
    exact: true,
    privateRoute: true
  }
};

const ProtectedRoutes = (props) => {
  const { component: Component, privateRoute, ...rest } = props;
  const isUserPresent = isPresentLocalStorageTokens();

  const isValidRoute =
    (privateRoute && isUserPresent) || !(privateRoute || isUserPresent);

  return (
    <Route
      {...rest}
      render={(props) =>
        isValidRoute ? (
          <Component {...props} />
        ) : (
          <Redirect to={privateRoute ? ROOT_ROUTE : HOME_ROUTE} />
        )
      }
    />
  );
};

const AppRoutes = () => {
  const routes = R.keys(routesConfig);

  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          const config = routesConfig[route];

          return (
            <Route
              exact={config.exact}
              key={`${route}`}
              path={config.path}
              render={(props) => (
                <ProtectedRoutes
                  component={config.component}
                  privateRoute={config.privateRoute}
                  {...props}
                />
              )}
            />
          );
        })}

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
