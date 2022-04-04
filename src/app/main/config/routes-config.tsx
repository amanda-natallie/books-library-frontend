import { lazy } from 'react'

import { IRoute } from '~/app/main/types'

export const RoutesConfig: IRoute[] = [
  {
    name: 'dashboard',
    path: '/',
    exact: true,
    private: true,
    component: lazy(async () => import('~/app/presentation/pages/home/home')),
    layout: 'DefaultLayout'
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: lazy(async () => import('~/app/presentation/pages/login/login')),
    layout: 'DefaultLayout'
  },
  {
    name: 'book-library',
    path: '/book-library',
    exact: true,
    component: lazy(async () => import('~/app/presentation/pages/book/load')),
    layout: 'DefaultLayout'
  },
  {
    name: 'add-book',
    path: '/book-library/add',
    exact: true,
    component: lazy(async () => import('~/app/presentation/pages/book/add')),
    layout: 'DefaultLayout'
  },
  {
    name: 'update-book',
    path: '/book-library/:id',
    exact: true,
    component: lazy(async () => import('~/app/presentation/pages/book/update')),
    layout: 'DefaultLayout'
  }
]
