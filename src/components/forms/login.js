import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class LoginForm extends Component {
  render () {
    const { className, fields: { email, password }, errorMsg, handleSubmit } = this.props

    const errorMsgDiv = errorMsg && <p className='pa3 bg-red white tc'>{errorMsg}</p>
    return (
      <form onSubmit={handleSubmit} className={className}>
        {errorMsgDiv}
        <label className='b db'>Email</label>
        <input
          type='email'
          placeholder='user@example.com'
          className='pa3 ba br2 b--light-gray db w-100 mb3'
          {...email}
        />
        <label className='b db'>Password</label>
        <input
          type='password'
          placeholder='***********'
          className='pa3 ba br2 b--light-gray db w-100 mb3'
          {...password}
        />
        <button
          type='submit'
          className='pa3 bn br2 white bg-green db w-100'>
          Log In
        </button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  errorMsg: PropTypes.string,
  className: PropTypes.string,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm)
