import React, { PropTypes } from 'react'

const FontFamilyBlock = ({ fontFamily, className }) => {
  return (
    <div className={className}>
      <p className='ma0 pa0' style={{fontFamily}}>{fontFamily}</p>
    </div>
  )
}

FontFamilyBlock.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FontFamilyBlock
