import React from 'react'
import PropTypes from 'prop-types'

import styles from './Table.module.scss'

export default function Table ({ dataRow }) {
  const columnResult = dataRow.title.map((titleColumn, index) => {
    return (
        <div key={titleColumn} className={styles.column}>
          <div className={'paragraphDefault'}>
            {titleColumn}
          </div>
          <div className={`${styles.row} paragraphLead`}>
            {dataRow.content[index]}
          </div>
        </div>
    )
  })

  return (
    <div className={styles.table}>
      {columnResult}
    </div>
  )
}

Table.propTypes = {
  dataRow: PropTypes.object
}
