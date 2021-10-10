import {
  MAIN_PAGE,
  BASKET_PAGE,
  REGISTER_PAGE,
  LOGIN_PAGE,
  USER_PROFILE,
  PRODUCT_DETAIL
} from '../utils/const';

import { Main, Basket, Login, Register,ProductDetail } from '../pages';

export const routes = {
  main: MAIN_PAGE,
  basket: BASKET_PAGE,
  login: LOGIN_PAGE,
  register: REGISTER_PAGE,
  productDetail: PRODUCT_DETAIL
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
  {
    path: routes.productDetail,
    component: ProductDetail

  }
];
export const privateRoutes = [
  {
    exact: true,
    path: USER_PROFILE,
    component: UserProfile,
  }
]
