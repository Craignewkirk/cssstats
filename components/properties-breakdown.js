import React from 'react'
import { Base, Heading, Text } from 'rebass'
import { Grid } from 'reflexbox'
import { VictoryPie } from 'victory'
import toPercentage from 'to-percentage'

import style from '../style'

export default ({ data }) => {
  const colorScale = [
    '#9e0142', '#d53e4f', '#f46d43', '#fdae61',
    '#fee08b', '#ffffbf', '#e6f598', '#abdda4',
    '#66c2a5', '#3288bd', '#5e4fa2'
  ]

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
      <Grid col={8}>
        <VictoryPie
          innerRadius={200}
          style={{
            labels: { fill: 'transparent' }
          }}
          data={pieData}
          colorScale={colorScale}
        />
      </Grid>
      <Grid col={4} px={2}>
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
