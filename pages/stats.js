import React from 'react'
import isBlank from 'is-blank'
import fetch from 'isomorphic-fetch'

import { Section, SectionHeader } from 'rebass'
import Header from '../components/header'

import c from 'next/css'
import style from '../style'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    if (isBlank(req)) return

    const res = await fetch(`https://cssstats-api.now.sh${req.url}`)
    const stats = await res.json()

    return { stats: stats.stats, title: stats.title }
  }

  constructor (props) {
    super(props)
    this.state = { stats: props.stats || {} }
    this.getStats = this.getStats.bind(this)
  }

  async getStats () {
    if (!isBlank(this.state.stats)) return

    const url = this.props.url.query.url
    const res = await fetch(`https://cssstats-api.now.sh/stats?url=${url}`)
    const stats = await res.json()

    this.setState({
      title: stats.title,
      stats: stats.stats
    })
  }

  render () {
    const { title, stats } = this.state || {}
    const { url: { query: { url } } } = this.props

    if (isBlank(stats)) {
      this.getStats()
      return <h1>Loading</h1>
    }

    return (
      <div className={c(style)}>
        <Header url={this.props.url} />
        <div style={{paddingTop: 48}}>
          <SectionHeader
            description={url}
            heading={title}
          />
        </div>
      </div>
    )
  }
}
