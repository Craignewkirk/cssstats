import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import LoginForm from '../components/forms/login'

const Login = React.createClass({
  handleSubmit (e) {
    console.log(e)
    this.context.router.push('/')
  },

  componentWillUpdate (nextProps) {
    if (nextProps.authenticated) {
      this.context.router.push('/design-system')
    }
  },

  render () {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    )
  }
})

Login.propTypes = {
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
}

Login.contextTypes = {
  router: PropTypes.object
}

function mapDispatchToProps (dispatch) {
  return {
    navigate: (route) => dispatch(routeActions.push(route))
  }
}

export default connect(
  mapDispatchToProps
)(Login)
