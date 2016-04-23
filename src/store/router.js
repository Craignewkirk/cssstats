import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import Urls from '../containers/Urls'

const routes = (
  <Route path='/' component={App}>
    <Route path='/about' component={Urls} />
  </Route>
)

export default routes
