import React from 'react'
import { Flex } from 'reflexbox'
import { Section, Heading, Stat } from 'rebass'

import style from '../style'

export default ({ declarations }) => {
  const fontSizes = declarations.properties['font-size'] || []
  const floats = declarations.properties['float'] || []
  const widths = declarations.properties['width'] || []
  const heights = declarations.properties['height'] || []
  const colors = declarations.properties['color'] || []
  const backgroundColors = declarations.properties['background-color'] || []

  return (
    <Section pt={2}>
      <Heading
        pb={2}
        level={3}
        children='Total Declarations'
      />
      <Flex
        justify='space-between'
        wrap
      >
        <Stat
          topLabel
          label='Font Size'
          value={fontSizes.length}
          style={{
            value: { fontSize: 10 }
          }}
        />
        <Stat
          topLabel
          label='Float'
          value={floats.length}
        />
        <Stat
          topLabel
          label='Width'
          value={widths.length}
        />
        <Stat
          topLabel
          label='Height'
          value={heights.length}
        />
        <Stat
          topLabel
          label='Color'
          value={colors.length}
        />
        <Stat
          topLabel
          label='Background Color'
          value={backgroundColors.length}
        />
      </Flex>
    </Section>
  )
}
