import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'

const REQUEST_URL = 'REQUEST_URL'
const RECEIVE_URL = 'RECEIVE_URL'

const initialState = fromJS({
  url: {},
  isFetching: false
})

const urlsReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case REQUEST_URL:
      return state.merge({
        isFetching: true
      })

    case RECEIVE_URL:
      return state.merge({
        isFetching: false,
        url: action.url
      })

    default:
      return state
  }
}

export default urlsReducer

/* Actions */

export const requestUrl = url => {
  return {
    type: REQUEST_URL,
    url: url
  }
}

const receiveUrl = json => {
  return {
    type: RECEIVE_URL,
    url: json
  }
}

const shouldFetchUrl = () => true

const fetchUrl = url => {
  return dispatch => {
    dispatch(requestUrl(url))
    return fetch(`http://api.cssstats.com/stats?url=${url}`)
      .then(req => req.json())
      .then(json => dispatch(receiveUrl(json)))
  }
}

export const fetchUrlIfNeeded = url => {
  return (dispatch, getState) => {
    if (shouldFetchUrl(getState())) {
      return dispatch(fetchUrl(url))
    }
  }
}
