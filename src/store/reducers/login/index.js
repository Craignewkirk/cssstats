import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'

const REQUEST_LOGIN = 'REQUEST_LOGIN'
const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

const initialState = fromJS({
  auth: {},
  isFetching: false
})

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case REQUEST_LOGIN:
      return state.merge({
        isFetching: true
      })

    case RECEIVE_LOGIN:
      return state.merge({
        isFetching: false,
        auth: { authenticated: true, token: action.token }
      })

    default:
      return state
  }
}

export default loginReducer

/* Actions */

export const requestLogin = (email, password) => {
  return {
    type: REQUEST_LOGIN,
    email, password
  }
}

const receiveLogin = json => {
  return {
    type: RECEIVE_LOGIN,
    auth: json
  }
}

const shouldFetchLogin = () => true

const fetchLogin = (email, password) => {
  return dispatch => {
    dispatch(requestLogin(email, password))
    return fetch(`http://api.cssstats.com/users/sessions`)
      .then(req => req.json())
      .then(json => dispatch(receiveLogin(json)))
  }
}

export const loginIfNeeded = (email, password) => {
  return (dispatch, getState) => {
    if (shouldFetchLogin(getState())) {
      return dispatch(fetchLogin(email, password))
    }
  }
}
