import { MAIN_PAGE, USER_PROFILE } from '../utils/const';
import Main from '../pages/Main';
import UserProfile from '../components/UserProfile/UserProfile';

export const routes = {
  main: MAIN_PAGE
}

export const publicRoutes = [
  {
    // path: routes.main,
    path: '/',
    component: Main,
  }
]

export const privateRoutes = [
  {
    exact: true,
    path: USER_PROFILE,
    component: UserProfile,
  }
]