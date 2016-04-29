import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'

import FontColorBlock from '../components/FontColorBlock'

class DesignSystem extends Component {
  render () {
    const colors = [
      '#BBCCBE', '#B59DA4', '#85756E', '#44420D', '#262626',
      '#DB504A', '#FF6F59', '#254441', '#43AA8B', '#B2B09B',
      '#FFBD72', '#3D9992', '#9BCCA1', '#36935B', '#1C4441'
    ]
    const fontColorBlocks = colors.map(color => {
      return (
        <Box col={2} p={2}>
          <FontColorBlock color={color} />
        </Box>
      )
    })

    return (
      <div>
       <div className='pv5 pv6-ns ph2 ph4-ns bg-near-white'>
          <div className='mh1'>
            <h1 className='f1 f-headline-ns mb0 pb0'>Design System</h1>
            <h2 className='f2 f1-ns i system-serif mid-gray'>The building blocks that make up CSS Stats</h2>
          </div>
        </div>
        <div className='pa3'>
          <h3 className='code'>&lt;FontColorBlock color='tomato' /&gt;</h3>
          <Flex wrap={true}>{fontColorBlocks}</Flex>
        </div>
      </div>
    )
  }
}

export default DesignSystem
