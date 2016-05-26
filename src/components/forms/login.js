import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class LoginForm extends Component {
  render () {
    const { className, fields: { email, password }, error, handleSubmit } = this.props

    const errorMsg = error && <h3>${error}</h3>
    return (
      <form onSubmit={handleSubmit} className={className}>
        {errorMsg}
        <label className='b db'>Email</label>
        <input
          type='email'
          placeholder='user@example.com'
          className='pa2 ba br2 b--light-gray'
          {...email}
        />
        <label className='b db'>Password</label>
        <input
          type='password'
          placeholder='*******'
          className='pa2 ba br2 b--light-gray'
          {...password}
        />
        <br />
        <button type='submit'>Log In</button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm)
