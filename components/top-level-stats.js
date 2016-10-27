import React from 'react'
import prettyBytes from 'pretty-bytes'
import { Flex } from 'reflexbox'
import { Stat } from 'rebass'

export default ({ stats }) => (
  <div>
    <Flex
      justify='space-between'
      wrap
    >
      <Stat
        pb={4}
        topLabel
        label='Size'
        value={prettyBytes(stats.size)}
      />
      <Stat
        pb={4}
        topLabel
        label='Gzipped Size'
        value={prettyBytes(stats.gzipSize)}
      />
      <Stat
        pb={4}
        topLabel
        label='Specificity Average'
        value={stats.selectors.specificity.average.toFixed(1)}
      />
    </Flex>
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
  </div>
)
