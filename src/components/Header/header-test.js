import test from 'ava'
import sinon from 'sinon'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Header from './'

test('renders the h1', t => {
  const componentHtml = renderStatic()
  t.true(componentHtml.includes('<h1>'))
})

test('shows authenticated nav when authenticated', t => {
  const componentHtml = renderStatic({ isAuthed: true })
  t.true(componentHtml.includes('<h1>Authed'))
})

test('shows unauthenticated nav when not authenticated', t => {
  const componentHtml = renderStatic()
  t.true(componentHtml.includes('<h1>Not Authed'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<Header {...props} />)
}
