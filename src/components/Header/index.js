import React, { PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'

const Header = ({ isAuthed }) => {
  const nav = isAuthed ? <AuthedNav /> : <Nav />

  return (
    <Flex align='center'>
      <Box col={6}>
        <h3>CSS Stats</h3>
      </Box>
      <Box col={6} className='tr'>
        {nav}
        <a href='https://github.com/cssstats/cssstats'>
          GitHub
        </a>
      </Box>
    </Flex>
  )
}

const AuthedNav = () => {
  return <a href='#'>Log Out</a>
}

const Nav = () => {
  return <a href='#'>Log In</a>
}

Header.propTypes = {
  isAuthed: PropTypes.bool
}

export default Header
