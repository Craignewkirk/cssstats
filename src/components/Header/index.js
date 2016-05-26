import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Flex, Box } from 'reflexbox'

const Header = ({ children, isAuthed }) => {
  const nav = isAuthed ? <AuthedNav /> : <Nav />

  return (
    <Flex align='center' className='pa3 b'>
      <Box col={6}>
        <a className='link black pv2' href='/'>CSS Stats</a>
        {children}
      </Box>
      <Box col={6} className='tr'>
        <a className='link gray mr3' href='https://github.com/cssstats/cssstats'>
          GitHub
        </a>
        {nav}
      </Box>
    </Flex>
  )
}

const AuthedNav = () => {
  return <a className='link gray' href='#'>Log Out</a>
}

const Nav = () => {
  return <Link className='link gray' to='/login'>Log In</Link>
}

Header.propTypes = {
  children: PropTypes.object,
  isAuthed: PropTypes.bool
}

export default Header
