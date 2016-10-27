import React from 'react'
import { Toolbar, Fixed, Space } from 'rebass'
import Link from '../components/relink'
import style from '../style'

export default ({ url }) => (
  <Fixed top left right zIndex={1}>
    <Toolbar style={{
      color: style.color,
      backgroundColor: style.backgroundColor
    }}>
      <Link
        href='/'
        url={url}
        children='Css Stats'
      />
      <Space auto x={1} />
      <Link
        url={url}
        href='https://github.com/cssstats/cssstats'
        children='GitHub'
      />
    </Toolbar>
  </Fixed>
)
