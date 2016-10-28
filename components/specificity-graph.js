import React from 'react'
import { Base, Heading } from 'rebass'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'

import style from '../style'

export default ({ data }) => {
  const max = data.reduce((p, v) => p > v ? p : v, 0)
  return (
    <Base mt={2}>
      <Heading
        pb={2}
        level={3}
        children='Specificity Graph'
      />
      <VictoryChart height={225}>
        <VictoryBar
          data={data.map((v, i) => ({ x: i, y: v}))}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[
            0, max * .25, max * .5, max * .75, max
          ]}
          style={{
            grid: {
              stroke: style.color,
              strokeWidth: 1
            },
            tickLabels: { fontSize: 8 },
            axis: { stroke: 'transparent' },
            tick: { stroke: 'transparent' }
          }}
        />
      </VictoryChart>
    </Base>
  )
}
