import React from 'react'
import { InlineForm } from 'rebass'

export default class extends React.Component {
  render () {
    return (
      <div>
        {this.props.url.query.uri}
      </div>
    )
  }
}
