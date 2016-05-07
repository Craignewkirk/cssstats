import React from 'react'
import { Route } from 'react-router'
import Urls from '../containers/Urls'
import App from '../containers/App'
import DesignSystem from '../containers/DesignSystem'

const routes = (
  <Route path='/' component={App}>
    <Route path='/design-system' component={DesignSystem} />
    <Route path='/about' component={Urls} />
  </Route>
)

export default routes
