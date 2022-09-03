import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './Accordion.module.scss'

export default function Accordion ({ content }) {
  const [activated, setActivated] = useState(false)

  function createMarkup (content) {
    return { __html: content }
  }

  return (
    <div className={`${styles.container} ${content.activated === 'active' ? styles.active : ''} ${content.activated === 'hover' ? styles.hover : ''} ${activated ? styles.active : ''}`} onClick={() => setActivated(!activated)}>
      <p className={`${styles.title}`}>{content.title}</p>
      <div className={`${styles.content} paragraphDefault`} dangerouslySetInnerHTML={createMarkup(content.content)} />
    </div>
  )
}

Accordion.propTypes = {
  content: PropTypes.array,
  styleActivated: PropTypes.string
}
