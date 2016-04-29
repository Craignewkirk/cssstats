import test from 'ava'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import BgColorBlock from './'

test('renders the color', t => {
  const backgroundColor = 'tomato'
  const componentHtml = renderStatic({ backgroundColor })
  t.true(componentHtml.includes('fill="tomato'))
  t.true(componentHtml.includes('tomato</p>'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<BgColorBlock {...props} />)
}
