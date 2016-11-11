import React from 'react'
import { Grid } from 'reflexbox'
import { Section, Heading, Stat } from 'rebass'

import style from '../style'

const getPropertyCount = (properties = []) => properties.length

export default ({ properties }) => {
  const spacingValues = [
    'margin', 'padding',
    'margin-top', 'margin-left', 'padding-top', 'padding-left',
    'margin-bottom', 'margin-right', 'padding-bottom', 'padding-right'
  ].map(property => ({
    property,
    count: getPropertyCount(properties[property])
  }))

  return (
    <Section>
      <Heading
        pb={2}
        level={3}
        children='Spacing'
      />
      {spacingValues.map(prop => (
        <Grid key={prop.property} col={6} md={3}>
          <Stat
            key={prop.property}
            label={prop.property}
            value={prop.count}
          />
        </Grid>
      ))}
    </Section>
  )
}
