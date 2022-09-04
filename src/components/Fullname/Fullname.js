import React from 'react'
import PropTypes from 'prop-types'

import styles from './Fullname.module.scss'

import { worker } from '../../context/dataBLockContext'

export default function FullName ({ style }) {
  return (
    <div className={`${styles.containerName} ${styles[style]}`}>
      <p className={`${styles.surname} ${styles[style]}`}>{worker.surname}</p>
      <p className={`${styles.name} ${styles[style]}`}>{worker.name}</p>
    </div>
  )
}

FullName.propTypes = {
  style: PropTypes.string,
  worker: PropTypes.object
}
