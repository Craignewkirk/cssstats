import React, { PropTypes } from 'react'
import { Container } from 'rebass'

import Header from '../components/header'
import Footer from '../components/footer'

import c from 'next/css'
import style from '../style'

export default class extends React.Component {
  static childContextTypes = {
    rebass: PropTypes.object
  }

  getChildContext () {
    return {
      rebass: {
        fontSizes: [72, 64, 48, 24, 18, 16, 14]
      }
    }
  }

  render () {
    return (
      <div className={c(style)}>
        <Container>
          <Header url={this.props.url} />
          <div style={{paddingTop: 48}}>
            {this.props.children}
          </div>
          <Footer />
        </Container>
      </div>
    )
  }
}
