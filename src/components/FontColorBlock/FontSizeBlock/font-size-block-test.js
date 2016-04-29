import test from 'ava'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import FontSizeBlock from './'

test('renders the font size', t => {
  const fontSize = '2rem'
  const componentHtml = renderStatic({ fontSize })
  t.true(componentHtml.includes('font-size:2rem;'))
  t.true(componentHtml.includes('2rem</p>'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<FontSizeBlock {...props} />)
}
