import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { loginIfNeeded } from '../store/reducers/login'
import LoginForm from '../components/forms/login'

const Login = React.createClass({
  propTypes: {
    loginIfNeeded: PropTypes.func.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  handleSubmit (e) {
    console.log(e)
    console.log(this.props)
    this.props.loginIfNeeded(e.email, e.password)
    this.context.router.push('/')
  },

  componentWillUpdate (nextProps) {
    if (nextProps.authenticated) {
      this.context.router.push('/design-system')
    }
  },

  render () {
    return (
      <LoginForm onSubmit={this.handleSubmit} auth={{}}/>
    )
  }
})

const mapStateToProps = state => ({
  isFetching: state.auth && state.auth.get('isFetching')
})

const mapDispatchToProps = dispatch => ({
  loginIfNeeded: (email, password) => dispatch(loginIfNeeded(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
