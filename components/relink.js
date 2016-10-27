import React from 'react'
import { NavItem } from 'rebass'

export default ({ href, url, children, ...props }) => (
  <NavItem
    onClick={() => url.pushTo(href)}
    children={children}
    {...props}
  />
)
