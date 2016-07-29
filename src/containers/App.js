import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { Link } from 'react-router'

import { Footer } from 'rebass'
import { Flex, Box } from 'reflexbox'

import Header from '../components/Header'
import UrlForm from '../components/forms/url'

const App = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool,
    children: PropTypes.object,
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  },

  handleSubmit (e) {
    this.context.router.push(`stats?url=${e.url}`)
  },

  render () {
    const { isAuthed, children } = this.props

    return (
      <div>
        <Link to='/urls' className='dn'>Urls</Link>
        <Header isAuthed={isAuthed}>
          <UrlForm onSubmit={this.handleSubmit} className='dib ml2 mv0' />
        </Header>
        <div>
          {children}
        </div>
        <Footer style={{ borderColor: '#eee' }}>
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
})

App.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = state => ({
  isAuthed: state.login.get('authenticated')
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
