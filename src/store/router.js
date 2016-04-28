import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import Urls from '../containers/Urls'
import DesignSystem from '../containers/DesignSystem'

const routes = (
  <Route path='/' component={App}>
    <Route path='/design-system' component={DesignSystem} />
    <Route path='/about' component={Urls} />
  </Route>
)

export default routes
