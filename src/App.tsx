import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import routes from '@/routes'
import Layout from './layout'
import './assets/css/index.less'

export default memo(function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Suspense fallback={<div>page-loading</div>}>{renderRoutes(routes)}</Suspense>
    </BrowserRouter>
  )
})
