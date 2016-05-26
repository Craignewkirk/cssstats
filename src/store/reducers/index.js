import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import loading from './loading'
import login from './login'
import urls from './urls'

const rootReducer = combineReducers({
  urls,
  login,
  loading,
  form,
  routing
})

export default rootReducer
