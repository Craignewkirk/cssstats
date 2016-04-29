import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { Link } from 'react-router'

import { Footer } from 'rebass'
import { Flex, Box } from 'reflexbox'

import Header from '../components/Header'

function mapDispatchToProps (dispatch) {
  return {
    navigate: (route) => dispatch(routeActions.push(route))
  }
}

class App extends Component {
  render () {
    const { props } = this
    return (
      <div>
        <Header />
        <div>
          {props.children}
        </div>
        <Footer>
          <Flex align='center' className='w-100 ph3'>
            <Box col={6}>
              Made by <a className='link gray b' href='http://mrmrs.cc'>Mrmrs</a>, <a className='link gray b' href='http://jxnblk.com'>Jxnblk</a> & <a className='link gray b' href='http://johnotander.com'>4lpine</a>
            </Box>
            <Box col={6} className='tr'>
              <Link to='design-system' className='link gray b mr3'>Design System</Link>
              <a className='link gray b mr3' href='https://github.com/cssstats/cssstats'>
                GitHub
              </a>
              <a className='link gray b' href='https://github.com/cssstats/cssstats/issues'>
                Issues
              </a>
            </Box>
          </Flex>
        </Footer>
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
}

export default connect(
  mapDispatchToProps
)(App)
