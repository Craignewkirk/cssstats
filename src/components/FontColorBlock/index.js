import React, { PropTypes } from 'react'
import { isAccessible } from 'get-contrast'

const FontColorBlock = ({ color, className }) => {
  const style = { color }

  if (!isAccessible(color, 'white')) {
    style.textShadow = '0 0 transparent' // TODO: A real outline would be nice.
  }

  return (
    <div className={className}>
      <p className='f1 b ma0' style={style}>
        Aa
      </p>
      <p className='ma0 f6 gray code'>{color}</p>
    </div>
  )
}

FontColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FontColorBlock
