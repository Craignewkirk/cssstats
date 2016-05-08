import React from 'react'
import { Route } from 'react-router'

import App from '../containers/App'
import Urls from '../containers/Urls'
import Stats from '../containers/Stats'
import DesignSystem from '../containers/DesignSystem'

const routes = (
  <Route path='/' component={App}>
    <Route path='design-system' component={DesignSystem} />
    <Route path='about' component={Urls} />
    <Route path='stats' component={Stats} />
  </Route>
)

export default routes
