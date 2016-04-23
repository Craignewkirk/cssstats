import React from 'react'

const Header = ({ isAuthed }) => {
  return isAuthed ? <h1>Authed</h1> : <h1>Not Authed</h1>
}

export default Header
