import React from 'react'
import { Base, Heading } from 'rebass'

import style from '../style'

export default ({ colors }) => (
  <div>
    <Heading
      pb={2}
      level={3}
      children={`${colors.length} Unique Colors`}
    />
    {colors.map(color => (
      <div
        key={color}
        style={{display: 'inline-block'}}
      >
        <Base py={2} px={3}>
          <Heading
            level={1}
            color={color}
            children='Aa'
          />
          <Heading
            level={6}
            children={color}
            style={{fontWeight: 'normal'}}
          />
        </Base>
      </div>
    ))}
  </div>
)
