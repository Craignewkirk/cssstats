import React, { PropTypes } from 'react'
import { isAccessible } from 'get-contrast'
import classNames from 'classnames'

const FontColorBlock = ({ color, className }) => {
  const bgColorClass = isAccessible(color, 'white') ? 'bg-white' : 'bg-dark-gray'

  return (
    <div className={classNames(className, bgColorClass)}>
      <p className='f1 ma0' style={{ color }}>
        Aa
      </p>
      <p className='ma0'>{color}</p>
    </div>
  )
}

FontColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FontColorBlock
