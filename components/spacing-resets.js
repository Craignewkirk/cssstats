import React from 'react'
import { Grid } from 'reflexbox'
import { Section, Heading, Stat } from 'rebass'

import style from '../style'

const getPropertyResetCount = (properties = []) => properties.filter(val => val === '0').length

export default ({ properties }) => {
  console.log(properties)
  const spacingResets = [
    'margin', 'padding',
    'margin-top', 'margin-left', 'padding-top', 'padding-left',
    'margin-bottom', 'margin-right', 'padding-bottom', 'padding-right'
  ].map(property => ({
    property,
    count: getPropertyResetCount(properties[property])
  }))

  return (
    <Section>
      <Heading
        pb={2}
        level={3}
        children='Spacing Resets'
      />
      {spacingResets.slice(0, 2).map(reset => (
        <Grid col={6} pb={2}>
          <Stat
            topLabel
            key={reset.property}
            label={reset.property}
            value={reset.count}
          />
        </Grid>
      ))}
      {spacingResets.slice(2, 10).map(reset => (
        <Grid col={6} md={3}>
          <Stat
            key={reset.property}
            label={reset.property}
            value={reset.count}
          />
        </Grid>
      ))}
    </Section>
  )
}
