import React from 'react'
import isBlank from 'is-blank'
import fetch from 'isomorphic-fetch'
import bytes from 'pretty-bytes'
import uniq from 'lodash.uniq'

import { SectionHeader } from 'rebass'
import Layout from '../components/layout'

import DeclarationStats from '../components/declaration-stats'
import TopLevelStats from '../components/top-level-stats'

import BackgroundColors from '../components/background-colors'
import Colors from '../components/colors'

import FontFamilies from '../components/font-families'
import FontSizes from '../components/font-sizes'

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

    console.log(stats)
    if (isBlank(stats)) {
      this.getStats()
      return <h1>Loading</h1>
    }

    return (
      <Layout>
        <SectionHeader
          description={url}
          heading={title}
        />
        <TopLevelStats stats={stats} />
        <DeclarationStats declarations={stats.declarations} />
        <Colors
          colors={
            uniq(stats.declarations.properties.color.map(c => c.toLowerCase()))
          }
        />
        <BackgroundColors
          backgroundColors={
            uniq(stats.declarations.properties['background-color'])
          }
        />
        <FontSizes
          fontSizes={
            uniq(stats.declarations.properties['font-size'])
          }
        />
        <FontFamilies
          fontFamilies={
            uniq(stats.declarations.properties['font-family'])
          }
        />
      </Layout>
    )
  }
}
