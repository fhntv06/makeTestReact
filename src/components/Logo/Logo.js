import React from 'react'
import PropTypes from 'prop-types'

import styles from './Logo.module.scss'

export default function Logo ({ parent }) {
  return (
    <img className={`${styles.logo} ${styles[parent]}`} src={`${process.env.PUBLIC_URL}/images/header/logo.png`}/>
  )
}

Logo.propTypes = {
  parent: PropTypes.string
}
