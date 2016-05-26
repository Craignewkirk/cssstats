import React, { PropTypes } from 'react'
import { routeActions } from 'react-router-redux'
import { connect } from 'react-redux'
import isBlank from 'is-blank'

import { Flex, Box } from 'reflexbox'
import { Stat } from 'rebass'

import FontColorBlock from '../components/FontColorBlock'
import BgColorBlock from '../components/BgColorBlock'

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
    const { location: { query: { url } } } = this.props
    const { url: { stats } } = this.props

    if (isBlank(stats)) { return <h1>Loading</h1> }

    const { url: { stats: { rules } } } = this.props
    const { url: { stats: { selectors } } } = this.props
    const { url: { stats: { declarations } } } = this.props
    const { url: { stats: { declarations: { properties } } } } = this.props
    const { url: { stats: { declarations: { properties: { color: colors } } } } } = this.props
    const { url: { stats: { declarations: { properties: { 'background-color': bgColors } } } } } = this.props

    return (
      <div>
        <div className='cf w-100 bb b--light-gray pv3'>
          <div className='fl w-60'>
            <h1 className='f2 mv0 truncate'>{url}</h1>
          </div>
          <div className='fl w-40 tr ttu tracked'>
            <h4 className='f3 mt2 mb0'>{stats.humanizedGzipSize}</h4>
          </div>
        </div>
        <div className='cf pv3 mt3'>
          <div className='fl w-50 w-25-ns'>
            <Stat label='Rules' value={rules.total} />
          </div>
          <div className='fl w-50 w-25-ns'>
            <Stat label='Selectors' value={selectors.total} />
          </div>
          <div className='fl w-50 w-25-ns'>
            <Stat label='Declarations' value={declarations.total} />
          </div>
          <div className='fl w-50 w-25-ns'>
            <Stat label='Properties' value={Object.keys(properties).length} />
          </div>
        </div>
        <div className='cf pv3'>
          <h3>Total Declarations</h3>
          <div className='fl w-33'>
            <Stat label='Font Size' value={(properties['font-size'] || []).length} topLabel />
          </div>
          <div className='fl w-33'>
            <Stat label='Float' value={(properties.float || []).length} topLabel />
          </div>
          <div className='fl w-33'>
            <Stat label='Width' value={(properties.width || []).length} topLabel />
          </div>
        </div>
        <div className='cf pt2'>
          <div className='fl w-33'>
            <Stat label='Height' value={(properties.height || []).length} topLabel />
          </div>
          <div className='fl w-33'>
            <Stat label='Color' value={(properties.color || []).length} topLabel />
          </div>
          <div className='fl w-33'>
            <Stat label='Background Color' value={(properties['background-color'] || []).length} topLabel />
          </div>
        </div>
        <div className='cf pv3'>
          <h3>Colors</h3>
          <Flex wrap>
            {colors.map((color, i)  => (
              <Box col={4} p={2}>
                <FontColorBlock color={color} key={i} />
              </Box>
            ))}
          </Flex>
        </div>
        <div className='cf pv3'>
          <h3>Background Colors</h3>
          <Flex wrap>
            {bgColors.map((color, i)  => (
              <Box col={4} p={2}>
                <BgColorBlock backgroundColor={color} key={i} />
              </Box>
            ))}
          </Flex>
        </div>
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
