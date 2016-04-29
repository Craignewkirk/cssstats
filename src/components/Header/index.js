import React, { PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'

const Header = ({ isAuthed }) => {
  const nav = isAuthed ? <AuthedNav /> : <Nav />

  return (
    <Flex align='center' className='pa3 b'>
      <Box col={6}>
        <a className='link black pv2' href='/'>CSS Stats</a>
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
  return <a className='link gray' href='#'>Log In</a>
}

Header.propTypes = {
  isAuthed: PropTypes.bool
}

export default Header
