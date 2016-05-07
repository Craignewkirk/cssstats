import React, { Component } from 'react'
import { routeActions } from 'react-router-redux'
import { connect } from 'react-redux'

import App from './App'
import UrlForm from '../components/forms/url'

class Root extends Component {
  onSubmit () {
    console.log('yay')
  }

  render () {
    return (
      <App>
        <UrlForm handleSubmit={this.onSubmit} />
      </App>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    navigate: (route) => dispatch(routeActions.push(route))
  }
}

export default connect(mapDispatchToProps)(Root)
