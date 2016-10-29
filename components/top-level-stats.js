import React from 'react'
import prettyBytes from 'pretty-bytes'
import { Flex } from 'reflexbox'
import { Stat, Divider } from 'rebass'

export default ({ stats }) => (
  <div>
    <Flex
      justify='space-between'
      wrap
    >
      <Stat
        pb={2}
        label='Size'
        value={prettyBytes(stats.size)}
      />
      <Stat
        pb={2}
        label='Gzipped Size'
        value={prettyBytes(stats.gzipSize)}
      />
      <Stat
        pb={2}
        label='Specificity Average'
        value={stats.selectors.specificity.average.toFixed(1)}
      />
    </Flex>
    <Divider mb={3} />
    <Flex
      justify='space-between'
      wrap
    >
      <Stat
        pb={2}
        label='Rules'
        value={stats.rules.total}
      />
      <Stat
        pb={2}
        label='Selectors'
        value={stats.selectors.total}
      />
      <Stat
        pb={2}
        label='Declarations'
        value={stats.declarations.total}
      />
      <Stat
        pb={2}
        label='Properties'
        value={Object.keys(stats.declarations.properties).length}
      />
    </Flex>
    <Divider />
  </div>
)
