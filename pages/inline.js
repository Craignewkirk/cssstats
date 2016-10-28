import React from 'react'
import isBlank from 'is-blank'
import isPresent from 'is-present'
import fetch from 'isomorphic-fetch'
import bytes from 'pretty-bytes'
import uniq from 'lodash.uniq'

import { SectionHeader } from 'rebass'

import Layout from '../components/layout'

import BackgroundColors from '../components/background-colors'
import Colors from '../components/colors'

import FontFamilies from '../components/font-families'
import FontSizes from '../components/font-sizes'

import c from 'next/css'
import style from '../style'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    if (isBlank(req)) return

    const url = req.url.split('?url=')[1]

    const res = await fetch(`https://inline.now.sh?url=${url}`)
    const styles = await res.json()

    return { styles }
  }

  constructor (props) {
    super(props)
    this.state = { styles: props.styles || {} }
    this.getStats = this.getStyles.bind(this)
  }

  async getStyles () {
    if (!isBlank(this.state.styles)) return

    const url = this.props.url.query.url
    const res = await fetch(`https://inline.now.sh?url=${url}`)
    const styles = await res.json()

    this.setState({ styles })
  }

  render () {
    const { styles } = this.state || {}
    const { url: { query: { url } } } = this.props

    if (isBlank(styles)) {
      this.getStyles()
      return <h1>Loading</h1>
    }

    console.log(styles)

    return (
      <Layout url={this.props.url}>
        <SectionHeader
          description='Inline Styles'
          heading={url}
        />
        <Colors
          colors={
            uniq((styles.declarations.properties.color || []).map(c => c.toLowerCase()))
          }
        />
        <BackgroundColors
          backgroundColors={
            uniq(styles.declarations.properties['background-color'] || [])
          }
        />

        <FontSizes
          fontSizes={
            uniq(styles.declarations.properties['font-size'] || [])
          }
        />
        <FontFamilies
          fontFamilies={
            uniq(styles.declarations.properties['font-family'] || [])
          }
        />
      </Layout>
    )
  }
}
