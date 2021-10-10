import {
  MAIN_PAGE,
  BASKET_PAGE,
  REGISTER_PAGE,
  LOGIN_PAGE,
  USER_PROFILE,
  PRODUCT_DETAIL,
  FAVORITES_PAGE,
  ADDPRODUCT_PAGE,
  EDITPRODUCT_PAGE,
} from '../utils/const';

import {
  Main,
  Basket,
  Login,
  Register,
  ProductDetail,
  Favorites,
  AddProduct,
  EditProudct,
} from '../pages';
import { UserProfile } from '../components';

export const routes = {
  main: MAIN_PAGE,
  basket: BASKET_PAGE,
  login: LOGIN_PAGE,
  register: REGISTER_PAGE,
  productDetail: PRODUCT_DETAIL,
  favorites: FAVORITES_PAGE,
  addProduct: ADDPRODUCT_PAGE,
  editProduct: EDITPRODUCT_PAGE,
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
    component: ProductDetail,
  },
  {
    path: routes.favorites,
    component: Favorites,
  },
];
export const privateRoutes = [
  {
    exact: true,
    path: USER_PROFILE,
    component: UserProfile,
  },
  {
    path: routes.addProduct,
    component: AddProduct,
  },
  {
    path: routes.editProduct,
    component: EditProudct,
  },
];
