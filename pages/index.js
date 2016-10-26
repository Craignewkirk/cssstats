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
    this.state = { uri: '' }
    this.handleUriChange = this.handleUriChange.bind(this)
    this.handleUriSubmit = this.handleUriSubmit.bind(this)
  }

  handleUriChange (e) {
    this.setState({
      uri: e.target.value
    })
  }

  handleUriSubmit (e) {
    this.props.url.pushTo(`/stats?uri=${this.state.uri}`)
    e.preventDefault()
  }

  render () {
    return (
      <div className={c(style)}>
        <h1>Css Stats</h1>
        <InlineForm
          label='uri'
          name='uri'
          type='url'
          buttonLabel='Get Stats'
          placeholder='Input a url, domain, or direct css link'
          onChange={this.handleUriChange}
          onClick={this.handleUriSubmit}
        />
      </div>
    )
  }
}
