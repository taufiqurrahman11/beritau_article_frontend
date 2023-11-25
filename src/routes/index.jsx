import MainLayout from '@layouts/MainLayout';
import Bookmark from '@pages/Bookmark';
import ChangePassword from '@pages/ChangePassword';
import CreateArticle from '@pages/CreateArticle';
import DetailArticle from '@pages/DetailArticle';

import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Profile from '@pages/Profile';
import Register from '@pages/Register';
import VerifyEmail from '@pages/VerifyEmail';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/verify-success',
    name: 'VerifyEmail',
    protected: false,
    component: VerifyEmail,
  },
  {
    path: '/article/:id',
    name: 'DetailArticle',
    protected: false,
    component: DetailArticle,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: true,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/create-article',
    name: 'CreateArticle',
    protected: true,
    component: CreateArticle,
    layout: MainLayout,
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    protected: true,
    component: ChangePassword,
    layout: MainLayout,
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    protected: true,
    component: Bookmark,
    layout: MainLayout,
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound,
    layout: MainLayout,
    protected: false,
  },
];

export default routes;
