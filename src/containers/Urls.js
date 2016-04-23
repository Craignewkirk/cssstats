import React, { Component } from 'react'
import { routeActions } from 'react-router-redux'
import { connect } from 'react-redux'

function mapDispatchToProps (dispatch) {
  return {
    navigate: (route) => dispatch(routeActions.push(route))
  }
}

class Urls extends Component {
  render () {
    return (
      <div>
        <h1>Urls <code>rj</code></h1>
      </div>
    )
  }
}

export default connect(mapDispatchToProps)(Urls)
