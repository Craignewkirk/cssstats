import React, { PropTypes } from 'react'
import { InlineForm, Section, Heading, Container } from 'rebass'

import Header from '../components/header'

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
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this)
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
        <Container>
          <Header url={this.props.url} />
          <div style={{paddingTop: 48}}>
            <Section>
              <Heading level={1} children='Parse Css' mb={2} />
              <InlineForm
                label='url'
                name='url'
                type='url'
                buttonLabel='Get Stats'
                placeholder='Input a url, domain, or direct css link'
                onChange={this.handleUrlChange}
                onClick={this.handleUrlSubmit}
              />
            </Section>
          </div>
        </Container>
      </div>
    )
  }
}
