import React from 'react'
// import styles from './Select.module.scss'
import PropTypes from 'prop-types'

import Input from '../InputTypes/Input/Input'

export default function Select ({ content }) {
  return (
    content.map((data, index) => {
      return (
        <Input key={index} content={data}/>
      )
    })
  )
}

Select.propTypes = {
  content: PropTypes.array
}
