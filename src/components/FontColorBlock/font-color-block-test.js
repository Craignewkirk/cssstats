import test from 'ava'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import FontColorBlock from './'

test('renders the color', t => {
  const color = 'tomato'
  const componentHtml = renderStatic({ color })
  t.true(componentHtml.includes('style="color:tomato;"'))
  t.true(componentHtml.includes('tomato</p>'))
})

test('adds bgColor of dark gray for contrast when appropriate', t => {
  const color = '#fafafa'
  const componentHtml = renderStatic({ color })
  t.true(componentHtml.includes('bg-dark-gray'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<FontColorBlock {...props} />)
}
