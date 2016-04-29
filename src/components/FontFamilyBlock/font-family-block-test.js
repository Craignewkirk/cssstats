import test from 'ava'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import FontFamilyBlock from './'

test('renders the font size', t => {
  const fontFamily = 'Helvetica,serif'
  const componentHtml = renderStatic({ fontFamily })
  t.true(componentHtml.includes('font-family:Helvetica,serif;'))
  t.true(componentHtml.includes('Helvetica,serif</p>'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<FontFamilyBlock {...props} />)
}
