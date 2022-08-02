import React from 'react'
import PropTypes from 'prop-types'

import styles from './DescriptionDevice.module.scss'

export default class DescriptionDevice extends React.Component {
  static propTypes = {
    arDescriptionDeviceDefault: PropTypes.array,
    arDescriptionDevice: PropTypes.array,
    header: PropTypes.string,
    srcImg: PropTypes.string
  }

  render () {
    let count = 0
    return (
      <div className={styles.container}>
        <h3>{this.props.header}</h3>
        <div className={styles.table}>
        {
          this.props.arDescriptionDeviceDefault.map((value, index) => {
            return (
              <div key={`${value}-column-${count++}`} className={styles.column}>
                <div className={`${styles.row} ${styles.head} paragraphDefault`}>
                  {value}
                </div>
                <div className={`${styles.row} paragraphLead`}>
                  {this.props.arDescriptionDevice[index]}
                </div>
              </div>
            )
          })
        }
        </div>
        <img src={process.env.PUBLIC_URL + this.props.srcImg}/>
      </div>
    )
  }
}
