import React from 'react'
import { Route } from 'react-router'

import App from '../containers/App'
import Auth from '../containers/Auth'
import Urls from '../containers/Urls'
import Login from '../containers/Login'
import Stats from '../containers/Stats'
import DesignSystem from '../containers/DesignSystem'

const routes = (
  <Route path='/' component={App}>
    <Route path='login' component={Login} />
    <Route path='design-system' component={DesignSystem} />
    <Route path='urls' component={Auth(Urls)} />
    <Route path='stats' component={Stats} />
  </Route>
)

export default routes
