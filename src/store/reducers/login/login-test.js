import test from 'ava'
import { Map } from 'immutable'

import loginReducer from './'

const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
const REQUEST_LOGIN = 'REQUEST_LOGIN'

let state = loginReducer(undefined, {})

test('initializes with state', t => {
  t.true(Map.isMap(state))
})

test('REQUEST_LOGIN sets isFetching to true', t => {
  state = fireAction(REQUEST_LOGIN, state, { email: 'foo@bar.com', password: 'password' })
  t.true(state.get('isFetching'))
})

test('RECEIVE_LOGIN sets isFetching to false', t => {
  state = fireAction(RECEIVE_LOGIN, state)
  t.false(state.get('isFetching'))
})

const fireAction = (type, currentState, email, password) => (
  loginReducer(currentState, { type, email, password })
)
