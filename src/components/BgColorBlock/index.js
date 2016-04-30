import React, { PropTypes } from 'react'

const BgColorBlock = ({ backgroundColor, className }) => {
  return (
    <div className={className}>
      <svg viewBox='0 0 64 64' width='64' height='64' style={{display: 'block', width: '100%', height: 'auto'}}>
        <rect width='64' height='64' fill={backgroundColor}></rect>
      </svg>
      <p className='ma0 mt2 f6 gray code'>{backgroundColor}</p>
    </div>
  )
}

BgColorBlock.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default BgColorBlock
