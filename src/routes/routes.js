import { MAIN_PAGE, PRODUCT_DETAIL } from '../utils/const';
import { Main, ProductDetail } from '../pages';

export const routes = {
  main: MAIN_PAGE,
  productDetail: PRODUCT_DETAIL
}

export const publicRoutes = [
  {
    path: routes.main,
    component: Main,
  },
  {
    path: routes.productDetail,
    component: ProductDetail
  }
]

export const privateRoutes = [
  // {
  //   exact: true,
  //   path:,
  //   component:
  // }
]