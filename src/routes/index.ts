import { lazy } from 'react'
import { RouteConfig } from 'react-router-config'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/pages/home'))
  },
  {
    path: '/about',
    component: lazy(() => import('@/pages/about'))
  }
]

export default routes
