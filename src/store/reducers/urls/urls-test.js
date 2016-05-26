import test from 'ava'
import { Map } from 'immutable'

import urlsReducer from './'

const RECEIVE_URL = 'RECEIVE_URL'
const REQUEST_URL = 'REQUEST_URL'
const RECEIVE_URLS = 'RECEIVE_URLS'
const REQUEST_URLS = 'REQUEST_URLS'

let state = urlsReducer(undefined, {})

test('initializes with state', t => {
  t.true(Map.isMap(state))
})

test('REQUEST_URL sets isFetching to true', t => {
  state = fireAction(REQUEST_URL, state, 'http://google.com')
  t.true(state.get('isFetching'))
})

test('RECEIVE_URL sets isFetching to false', t => {
  state = fireAction(RECEIVE_URL, state, 'http://google.com')
  t.false(state.get('isFetching'))
})

test('REQUEST_URLS sets isFetching to true', t => {
  state = fireAction(REQUEST_URLS, state)
  t.true(state.get('isFetching'))
})

test('RECEIVE_URLS sets isFetching to false', t => {
  state = fireAction(RECEIVE_URLS, state)
  t.false(state.get('isFetching'))
})

const fireAction = (type, currentState, url = '') => (
  urlsReducer(currentState, { type, url })
)
