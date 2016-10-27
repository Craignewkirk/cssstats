import React from 'react'
import { Flex } from 'reflexbox'
import { Stat } from 'rebass'

export default ({ stats }) => (
  <Flex
    justify='space-between'
    wrap
  >
    <Stat
      label='Rules'
      value={stats.rules.total}
    />
    <Stat
      label='Selectors'
      value={stats.selectors.total}
    />
    <Stat
      label='Declarations'
      value={stats.declarations.total}
    />
    <Stat
      label='Properties'
      value={Object.keys(stats.declarations.properties).length}
    />
  </Flex>
)
