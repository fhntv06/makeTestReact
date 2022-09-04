import React from 'react'
import PropTypes from 'prop-types'

import styles from './Link.module.scss'

export default function Link ({ data }) {
  return (
    <div className={styles.container}>
    {data.type === 'circle' &&
      <>
        <span className={styles.circle}>
          <span className={styles.circleContent}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
              <path d="M6 0V6H4V2H0V0H6Z" fill="#3E29E3"/>
              </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M12 12H0L0 0H6V2H2V10H10V6H12V12Z" fill="#3E29E3"/>
            </svg>
          </span>
        </span>
        <a href={data.src}>{data.text}</a>
      </>
    }
    </div>
  )
}

Link.propTypes = {
  data: PropTypes.object
}
