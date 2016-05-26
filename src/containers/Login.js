import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'

import { loginIfNeeded } from '../store/reducers/login'
import LoginForm from '../components/forms/login'

const Login = React.createClass({
  getInitialState () {
    return { errorMsg: null }
  },

  propTypes: {
    loginIfNeeded: PropTypes.func.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  handleSubmit (e) {
    this.props.loginIfNeeded(e.email, e.password).then(response => {
      cookie.save('token', response.auth.token)
      cookie.save('email', response.auth.email)

      this.context.router.push('/')
    })
    .catch(() => {
      this.setState({ errorMsg: 'Invalid email or password' })
    })
  },

  render () {
    return (
      <div className='pa3 pa5-ns measure center'>
        <LoginForm
          onSubmit={this.handleSubmit}
          errorMsg={this.state.errorMsg} />
      </div>
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
