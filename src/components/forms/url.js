import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class UrlForm extends Component {
  render () {
    const { className, fields: { url }, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} className={className}>
        <label className='dn'>Url</label>
        <input
          type='url'
          placeholder='https://google.com'
          className='pa2 ba br2 b--light-gray'
          {...url}
        />
        <button type='submit' className='dn'>Submit</button>
      </form>
    )
  }
}

UrlForm.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'url',
  fields: ['url']
})(UrlForm)
