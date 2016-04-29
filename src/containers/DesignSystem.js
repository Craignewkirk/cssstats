import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'

import BgColorBlock from '../components/BgColorBlock'
import FontColorBlock from '../components/FontColorBlock'
import FontFamilyBlock from '../components/FontFamilyBlock'
import FontSizeBlock from '../components/FontSizeBlock'

class DesignSystem extends Component {
  render () {
    const colors = [
      '#BBCCBE', '#B59DA4', '#85756E', '#44420D', '#262626',
      '#DB504A', '#FF6F59', '#254441', '#43AA8B', '#B2B09B',
      '#FFBD72', '#3D9992', '#9BCCA1', '#36935B', '#1C4441'
    ]

    const fontColorBlocks = colors.map((color, i) => {
      return (
        <Box col={2} p={2}>
          <FontColorBlock color={color} key={i} />
        </Box>
      )
    })

    const bgColorBlocks = colors.map((color, i) => {
      return (
        <Box col={2} p={2}>
          <BgColorBlock backgroundColor={color} key={i} />
        </Box>
      )
    })

    const fontSizes = ['8px', '10px', '1rem', '150%', '1.75em', '2rem', '4rem', '8em']
    const fontSizeBlocks = fontSizes.map(size => <FontSizeBlock fontSize={size} />)

    const fontFamilies = [
      'sans-serif',
      'monospace,serif',
      'inherit',
      'proxima-nova-alt,"Helvetica Neue",Helvetica,Arial,sans-serif',
      'freight-text-pro,Georgia,serif',
      'bustle-icons',
      '"Helvetica Neue",Helvetica,Arial,sans-serif',
      'flower-icons',
      '"Helvetica Neue", "helvetica", "arial", "san-serif"'
    ]
    const fontFamilyBlocks = fontFamilies.map(fam => <FontFamilyBlock fontFamily={fam} className='f3' />)

    return (
      <div>
       <div className='pv5 pv6-ns ph2 ph4-ns bg-near-white'>
          <div className='mh1'>
            <h1 className='f1 f-headline-ns mb0 pb0'>Design System</h1>
            <h2 className='f2 f1-ns i system-serif mid-gray'>The building blocks that make up CSS Stats</h2>
          </div>
        </div>
        <div className='ph3 pv5'>
          <h3 className='code'>&lt;FontColorBlock color='tomato' /&gt;</h3>
          <Flex wrap={true}>{fontColorBlocks}</Flex>
        </div>
        <div className='ph3 pv5 bg-near-white'>
          <h3 className='code'>&lt;BgColorBlock color='tomato' /&gt;</h3>
          <Flex wrap={true}>{bgColorBlocks}</Flex>
        </div>
        <div className='ph3 pv5'>
          <h3 className='code'>&lt;FontSizeBlock fontSize='1rem' /&gt;</h3>
          {fontSizeBlocks}
        </div>
        <div className='ph3 pv5 bg-near-white'>
          <h3 className='code'>&lt;FontFamilyBlock fontFamily='Helvetica,sans-serif' /&gt;</h3>
          {fontFamilyBlocks}
        </div>
      </div>
    )
  }
}

export default DesignSystem
