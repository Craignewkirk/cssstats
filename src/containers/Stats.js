import React, { PropTypes } from 'react'
import { routeActions } from 'react-router-redux'
import { connect } from 'react-redux'

import { fetchUrlIfNeeded } from '../store/reducers/urls'

const Stats = React.createClass({
  propTypes: {
    params: PropTypes.object,
    location: PropTypes.object,
    fetchUrlIfNeeded: PropTypes.func.isRequired,
    url: PropTypes.object
  },

  contextTypes: {
    router: PropTypes.object
  },

  componentDidMount () {
    const { location: { query: { url } } } = this.props
    this.props.fetchUrlIfNeeded(url)
  },

  render () {
    const { url: { stats: stats } } = this.props

    return (
      <div>
        {stats.size}
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
  url: state.urls.get('url').toJS(),
  isFetching: state.urls.get('isFetching')
})

const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(routeActions.push(route)),
  fetchUrlIfNeeded: (urlId) => dispatch(fetchUrlIfNeeded(urlId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)
