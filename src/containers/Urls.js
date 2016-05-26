import React, { PropTypes } from 'react'
import { routeActions } from 'react-router-redux'
import { connect } from 'react-redux'

import { fetchUrlsIfNeeded } from '../store/reducers/urls'

const Urls = React.createClass({
  propTypes: {
    fetchUrlsIfNeeded: PropTypes.func.isRequired,
    urls: PropTypes.array
  },

  contextTypes: {
    router: PropTypes.object
  },

  componentDidMount () {
    this.props.fetchUrlsIfNeeded()
  },

  render () {
    const { urls } = this.props

    return (
      <div>
        {urls.map(u => u.value)}
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
  urls: state.urls.get('urls').toJS(),
  isFetching: state.urls.get('isFetching')
})

const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(routeActions.push(route)),
  fetchUrlsIfNeeded: () => dispatch(fetchUrlsIfNeeded())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Urls)
