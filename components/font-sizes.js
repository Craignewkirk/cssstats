import React from 'react'
import { Base, Heading } from 'rebass'
import unitSort from 'css-unit-sort'

import style from '../style'

export default ({ fontSizes }) => (
  <Base mt={2}>
    <Heading
      pb={2}
      level={3}
      children={`${fontSizes.length} Unique Font Sizes`}
    />
    {unitSort(fontSizes).map(fontSize => (
      <div key={fontSize}>
        <p style={{fontSize, margin: 0, padding: 0}} children={fontSize} />
      </div>
    ))}
  </Base>
)
