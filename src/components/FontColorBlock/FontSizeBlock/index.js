import React, { PropTypes } from 'react'

const FontSizeBlock = ({ fontSize, className }) => {
  return (
    <div className={className}>
      <p className='ma0 pa0' style={{fontSize}}>Font Size {fontSize}</p>
    </div>
  )
}

FontSizeBlock.propTypes = {
  fontSize: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FontSizeBlock
