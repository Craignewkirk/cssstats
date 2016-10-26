import React, { PropTypes } from 'react'
import { InlineForm } from 'rebass'

import c from 'next/css'
import style from '../style'

export default class extends React.Component {
  static getInitialProps () {
    return {
      sites: [
        'google.com'
      ]
    }
  }

  constructor (props) {
    super(props)
    this.state = { url: '' }
    this.handleUriChange = this.handleUriChange.bind(this)
    this.handleUriSubmit = this.handleUriSubmit.bind(this)
  }

  handleUrlChange (e) {
    this.setState({
      url: e.target.value
    })
  }

  handleUrlSubmit (e) {
    this.props.url.pushTo(`/stats?url=${this.state.url}`)
    e.preventDefault()
  }

  render () {
    return (
      <div className={c(style)}>
        <h1>Css Stats</h1>
        <InlineForm
          label='url'
          name='url'
          type='url'
          buttonLabel='Get Stats'
          placeholder='Input a url, domain, or direct css link'
          onChange={this.handleUrlChange}
          onClick={this.handleUrlSubmit}
        />
      </div>
    )
  }
}
