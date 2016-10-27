import React from 'react'
import { Base, Heading } from 'rebass'

import style from '../style'

export default ({ backgroundColors }) => (
  <Base mt={2}>
    <Heading
      pb={2}
      level={3}
      children={`${backgroundColors.length} Unique Background Colors`}
    />
    {backgroundColors.map(color => (
      <div
        key={color}
        style={{display: 'inline-block'}}
      >
        <Base py={2} px={3}>
          <Base
            p={4}
            mb={1}
            backgroundColor={color}
          />
          <Heading
            level={6}
            children={color}
            style={{fontWeight: 'normal'}}
          />
        </Base>
      </div>
    ))}
  </Base>
)
