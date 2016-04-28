import React, { Component } from 'react'
import { Stat } from 'rebass'
import { Flex, Box } from 'reflexbox'

import FontColorBlock from '../components/FontColorBlock'

class DesignSystem extends Component {
  render () {
    return (
      <div>
       <div className='pv5 pv6-ns ph2 ph4-ns bg-near-white'>
          <div className='mh1'>
            <h1 className='f1 f-headline-ns mb0 pb0'>Design System</h1>
            <h2 className='f2 f1-ns i system-serif mid-gray'>The building blocks that make up CSS Stats</h2>
          </div>
        </div> 
        <div className='pa3'>
          <h3 className='code'>&lt;Stat label='tomato' color='tomato' value='Aa' /&gt;</h3>
          <Flex wrap={true}>
            <Box col={2}>
              <Stat label='#444' color='#444' value='Aa' />
            </Box>
            <Box col={2}>
              <Stat label='#292f33' color='#292f33' value='Aa' />
            </Box>
            <Box col={2}>
              <Stat label='#1b95e0' color='#1b95e0' value='Aa' />
            </Box>
          </Flex>
        </div>
      </div>
    )
  }
}

export default DesignSystem
