import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import loading from './loading'
import urls from './urls'

const rootReducer = combineReducers({
  urls,
  loading,
  routing: routeReducer
})

export default rootReducer
