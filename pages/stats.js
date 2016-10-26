import React from 'react'
import fetch from 'isomorphic-fetch'
import { PageHeader } from 'rebass'

import c from 'next/css'
import style from '../style'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const res = await fetch(`https://cssstats-api.now.sh${req.url}`)
    const stats = await res.json()

    return { stats: stats.stats }
  }

  render () {
    const { stats } = this.props
    const { url: { query: { url } } } = this.props

    return (
      <div className={c(style)}>
        <PageHeader
          heading={url}
          description={`Contains ${stats.gzipSize} of css (gzipped)`}
        />
        {this.props.url.query.uri}
        {this.props.userAgent}
        {this.props.stats.title}
      </div>
    )
  }
}
