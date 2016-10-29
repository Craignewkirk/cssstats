import React from 'react'
import { Base, Heading, Text } from 'rebass'
import { Grid } from 'reflexbox'
import { VictoryPie } from 'victory'
import toPercentage from 'to-percentage'

import style from '../style'
import colorScale from '../util/color-scale'

export default ({ data }) => {
  const pieData = Object.keys(data)
    .reduce((p, d) => p.concat({ x: d, y: data[d].length }), [])
    .sort((a, b) => a.y < b.y ? -1 : 1)

  const total = pieData.reduce((p, d) => p + d.y, 0)

  return (
    <Base mt={2}>
      <Heading
        pb={3}
        level={3}
        children='Properties Breakdown'
      />
      <Grid md={6}>
        <VictoryPie
          innerRadius={200}
          style={{
            labels: { fill: 'transparent' }
          }}
          data={pieData}
          colorScale={colorScale}
        />
      </Grid>
      <Grid md={6} px={3}>
        {pieData.reverse().slice(0, 20).map((p, i) => {
          const pct = toPercentage(p.y / total, 2)

          return (
            <div key={i}>
              <Base
                p={1}
                style={{display: 'inline-block'}}
                backgroundColor={colorScale[i % colorScale.length]}
              />
              <Text
                small
                pl={1}
                style={{display: 'inline-block'}}
                children={`${p.x} ${pct}`}
              />
            </div>
          )
        })}
      </Grid>
    </Base>
  )
}
