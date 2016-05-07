import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import loading from './loading'
import urls from './urls'

const rootReducer = combineReducers({
  urls,
  loading,
  form,
  routing
})

export default rootReducer
