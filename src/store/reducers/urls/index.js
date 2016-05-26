import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'

const REQUEST_URL = 'REQUEST_URL'
const RECEIVE_URL = 'RECEIVE_URL'
const RECEIVE_URLS = 'RECEIVE_URLS'
const REQUEST_URLS = 'REQUEST_URLS'

const initialState = fromJS({
  url: {},
  urls: [],
  isFetching: false
})

const urlsReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case REQUEST_URL:
    case REQUEST_URLS:
      return state.merge({
        isFetching: true
      })

    case RECEIVE_URL:
      return state.merge({
        isFetching: false,
        url: action.url
      })

    case RECEIVE_URLS:
      return state.merge({
        isFetching: false,
        urls: action.urls
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

export const requestUrls = () => ({
  type: REQUEST_URLS
})

const receiveUrls = json => ({
  type: RECEIVE_URLS,
  urls: json
})

const shouldFetchUrl = () => true
const shouldFetchUrls = () => true

const fetchUrl = url => {
  return dispatch => {
    dispatch(requestUrl(url))
    return fetch(`http://api.cssstats.com/stats?url=${url}`)
      .then(req => req.json())
      .then(json => dispatch(receiveUrl(json)))
  }
}

const fetchUrls = () => {
  return dispatch => {
    dispatch(requestUrls())
    return fetch('http://cssstats-pro.herokuapp.com/urls')
      .then(req => req.json())
      .then(json => dispatch(receiveUrls(json)))
  }
}

export const fetchUrlIfNeeded = url => {
  return (dispatch, getState) => {
    if (shouldFetchUrl(getState())) {
      return dispatch(fetchUrl(url))
    }
  }
}

export const fetchUrlsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchUrls(getState())) {
      return dispatch(fetchUrls())
    }
  }
}
