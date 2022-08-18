import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input/Input'
import Checkbox from './Checkbox/Checkbox'

export default function InputTypes ({ content }) {
  return (
    content.map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item.type === 'input' && <Input content={item}/>}
          {(item.type === 'checkbox' || item.type === 'radio') && <Checkbox item={item}/>}
        </React.Fragment>
      )
    })
  )
}

InputTypes.propTypes = {
  content: PropTypes.array
}
