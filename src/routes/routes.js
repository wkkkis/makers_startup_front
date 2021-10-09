import { MAIN_PAGE } from '../utils/const';
import { Main } from '../pages';

export const routes = {
  main: MAIN_PAGE
}

export const publicRoutes = [
  {
    path: routes.main,
    component: Main
  }
]

export const privateRoutes = [
  // {
  //   exact: true,
  //   path:,
  //   component:
  // }
]