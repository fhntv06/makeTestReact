import React from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.scss'

export default function Checkbox ({ content }) {
  return (
    <p className={styles.p}>{content.label}</p>
  )
}

Checkbox.propTypes = {
  content: PropTypes.array
}
