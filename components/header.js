import React from 'react'
import { NavItem, Toolbar, Fixed, Space } from 'rebass'
import style from '../style'

export default ({ url }) => (
  <Fixed top left right zIndex={1}>
    <Toolbar style={{
      color: style.color,
      backgroundColor: style.backgroundColor
    }}>
      <NavItem
        onClick={() => url.pushTo('/')}
        children='Css Stats'
      />
      <Space auto x={1} />
      <NavItem
        href='https://github.com/cssstats/cssstats'
        children='GitHub'
      />
    </Toolbar>
  </Fixed>
)
