import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeadContent.module.scss'

function header (objTitles) {
  return (
    <>
      {objTitles.titleH1 && <h1 className={`${styles.headerLevelOne}`}>{objTitles.titleH1}</h1>}
      {objTitles.titleH2 && <h2 className={styles.headerLevelTwo}>{objTitles.titleH2}</h2>}
    </>
  )
}

function paragraphLead (paragraphLead) {
  return (
    paragraphLead && <p className={`paragraphLead ${styles.paragraphLead}`}>{paragraphLead}</p>
  )
}

function paragraphDefault (paragraphDefault) {
  return paragraphDefault && <p className={`paragraphDefault ${styles.paragraphDefault} `}>{paragraphDefault}</p>
}

function paragraphSize18 (paragraphSize18) {
  return paragraphSize18 && <p className={`paragraphSize18 ${styles.paragraphSize18} `}>{paragraphSize18}</p>
}

export default function HeadContent ({ data }) {
  return (
    <div id={data.link} className={`${styles.textblock} textblock`}>
      {data.title && header(data.title)}
      {data.paragraphLead && paragraphLead(data.paragraphLead)}
      {data.paragraphDefault && paragraphDefault(data.paragraphDefault)}
      {data.paragraphSize18 && paragraphSize18(data.paragraphSize18)}
    </div>
  )
}

HeadContent.propTypes = {
  data: PropTypes.object
}
