import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeadContent.module.scss'

function header (objTitles) {
  return (
    <>
      {objTitles.titleH1 && <h1 className={styles.header}>{objTitles.titleH1}</h1>}
      {objTitles.titleH2 && <h1 className={styles.header}>{objTitles.titleH2}</h1>}
    </>
  )
}
function paragraphLead (paragraphLead) {
  return (
    paragraphLead && <p className={styles.paragraphLead}>{paragraphLead}</p>
  )
}

function paragraphDefault (paragraphDefault) {
  return paragraphDefault && <p className='paragraphDefault'>{paragraphDefault}</p>
}

export default function HeadContent (props) {
  return (
    <div className={styles.textblock}>
      {props.data.title && header(props.data.title)}
      {props.data.paragraphLead && paragraphLead(props.data.paragraphLead)}
      {props.data.paragraphDefault && paragraphDefault(props.data.paragraphDefault)}
    </div>
  )
}

HeadContent.propTypes = {
  data: PropTypes.array
}
