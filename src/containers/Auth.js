import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'

export default (Component) => {
  const Auth = React.createClass({
    propTypes: {
      authenticated: PropTypes.bool
    },

    contextTypes: {
      router: PropTypes.object
    },

    componentDidMount () {
      if (!cookie.load('email') || !cookie.load('token')) {
        this.context.router.push('/login')
      }
    },

    render () {
      return <Component {...this.props} />
    }
  })

  const mapStateToProps = (state) => ({
    authenticated: state.auth && state.auth.authenticated
  })

  return connect(
    mapStateToProps
  )(Auth)
}
