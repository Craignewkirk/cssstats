import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class UrlForm extends Component {
  render () {
    const { fields: { url }, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <label className='dn'>Url</label>
        <input type='url' placeholder='https://google.com' {...url} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

UrlForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'url',
  fields: ['url']
})(UrlForm)
