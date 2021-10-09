import { MAIN_PAGE, BASKET_PAGE } from '../utils/const';

import { Main, Basket } from '../pages';

export const routes = {
  main: MAIN_PAGE,
  basket: BASKET_PAGE,
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
];

export const privateRoutes = [
  // {
  //   exact: true,
  //   path:,
  //   component:
  // }
];
