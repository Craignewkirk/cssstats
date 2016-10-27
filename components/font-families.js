import React from 'react'
import { Base, Heading } from 'rebass'
import unitSort from 'css-unit-sort'

import style from '../style'

export default ({ fontFamilies }) => (
  <Base mt={2}>
    <Heading
      pb={2}
      level={3}
      children={`${fontFamilies.length} Unique Font Families`}
    />
    {unitSort(fontFamilies).map(fontFamily => (
      <div key={fontFamily}>
        <p style={{fontFamily, margin: 0, padding: 0}} children={fontFamily} />
      </div>
    ))}
  </Base>
)
