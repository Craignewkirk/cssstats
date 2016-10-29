import React from 'react'
import { Heading } from 'rebass'
import { Grid } from 'reflexbox'

import style from '../style'

export default ({ colors }) => (
  <div>
    <Heading
      pb={2}
      level={3}
      children={`${colors.length} Unique Colors`}
    />
    {colors.map(color => (
      <Grid key={color} col={6} md={3} lg={2} py={2} px={3}>
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
      </Grid>
    ))}
  </div>
)
