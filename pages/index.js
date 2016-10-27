import React, { PropTypes } from 'react'
import Link from '../components/relink'
import { Container } from 'rebass'

import Header from '../components/header'
import Footer from '../components/footer'
import UrlForm from '../components/url-form'
import PopularSites from '../components/popular-sites'

import c from 'next/css'
import style from '../style'

export default class extends React.Component {
  static getInitialProps () {
    return {
      sites: [
        'google.com', 'yahoo.com', 'twitter.com', 'facebook.com', 'tumblr.com', 'apple.com',
        'youtube.com', 'pinterest.com', 'medium.com', 'paypal.com', 'stripe.com', 'trulia.com',
        'wikipedia.org', 'craigslist.org', 'github.com', 'stackoverflow.com', 'nytimes.com',
        'theguardian.com', 'mozilla.org', 'flickr.com', 'soundcloud.com', 'envoy.com', 'bbc.com',
        'kickstarter.com', 'etsy.com', 'mapbox.com'
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
            <UrlForm
              onChange={this.handleUrlChange}
              onSubmit={this.handleUrlSubmit}
            />
            <PopularSites
              sites={this.props.sites}
              url={this.props.url}
            />
          </div>
          <Footer />
        </Container>
      </div>
    )
  }
}
