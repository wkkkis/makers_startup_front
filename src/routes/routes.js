import {
  MAIN_PAGE,
  BASKET_PAGE,
  REGISTER_PAGE,
  LOGIN_PAGE,
} from '../utils/const';

import { Main, Basket, Login, Register } from '../pages';

export const routes = {
  main: MAIN_PAGE,
  basket: BASKET_PAGE,
  login: LOGIN_PAGE,
  register: REGISTER_PAGE,
};

export const publicRoutes = [
  {
    path: routes.main,
    component: Main,
  },
  {
    path: routes.basket,
    component: Basket,
  },
  {
    path: routes.login,
    component: Login,
  },
  {
    path: routes.register,
    component: Register,
  },
];

export const privateRoutes = [
  // {
  //   exact: true,
  //   path:,
  //   component:
  // }
];
