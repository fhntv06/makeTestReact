import React from 'react'
import PropTypes from 'prop-types'

import styles from './Table.module.scss'

export default function Table (props) {
  const titlesColumn = ['Контент', 'Колонок', 'Ширина колонки', 'Межколонник']
  const columnResult = titlesColumn.map((titleColumn, index) => {
    return (
        <div key={titleColumn} className={styles.column}>
          <div className={`${styles.row} ${styles.head} paragraphDefault`}>
            {titleColumn}
          </div>
          <div className={`${styles.row} paragraphLead`}>
            {props.dataRow[index]}
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
  dataRow: PropTypes.array
}
