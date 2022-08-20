import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input/Input'
import Checkbox from './Checkbox/Checkbox'
import Radio from './Radio/Radio'

export default function InputTypes ({ content }) {
  return (
    content.map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item.type === 'input' && <Input content={item} />}
          {item.type === 'checkbox' && <Checkbox item={item} styleActivated={item.activated} />}
          {item.type === 'radio' && <Radio item={item} styleActivated={item.activated} />}
        </React.Fragment>
      )
    })
  )
}

InputTypes.propTypes = {
  content: PropTypes.array
}
