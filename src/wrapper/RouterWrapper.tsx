/** @format */

import React from 'react'

import { RoleProps, RouteProps } from '@types'
import { LoadingScreen } from 'components/ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'stores/slice'
import { history } from 'utils/history'
import { loadAccessToken } from 'utils/storage'
// import { ConnectedRouter } from 'connected-react-router';

const HOME = 'sales/list-lead'
const LOGIN = '/login'

interface PrivateRouteProps {
  auth?: Array<RoleProps>
  alt?: string
  children: React.ReactElement
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const token = loadAccessToken()
  const { alt, children, auth } = props

  if (auth?.includes('guest')) {
    return token ? <Navigate to={alt || HOME} /> : children
  } else {
    return token ? children : <Navigate to={alt || LOGIN} />
  }
}

const renderRoute = (route: RouteProps) => {
  const { type: routeType, path, element: Element, nested, auth, alt } = route

  return (
    <Route
      key={path}
      path={path}
      element={
        <React.Suspense fallback={<LoadingScreen />}>
          <PrivateRoute auth={auth} alt={alt}>
            <Element />
          </PrivateRoute>
        </React.Suspense>
      }
    >
      {routeType === 'nested' && nested?.map(renderRoute)}
    </Route>
  )
}

interface RouterProps {
  routes: Array<RouteProps>
  default: string
}

const CustomRouter = (props: RouterProps) => {
  const { default: defaultRoute, routes } = props
  return (
    <BrowserRouter history={history}>
      <Routes>
        {routes.map(renderRoute)}
        <Route path="/*" element={<Navigate to={HOME} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CustomRouter
