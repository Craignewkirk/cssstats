import React from 'react'
import { Route } from 'react-router'
import Urls from '../containers/Urls'
import Root from '../containers/Root'
import DesignSystem from '../containers/DesignSystem'

const routes = (
  <Route path='/' component={Root}>
    <Route path='/design-system' component={DesignSystem} />
    <Route path='/about' component={Urls} />
  </Route>
)

export default routes
