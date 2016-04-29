import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

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
