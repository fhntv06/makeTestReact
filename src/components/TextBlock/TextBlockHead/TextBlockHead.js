import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextBlockHead.module.scss'
// разбитьы

function header (header) {
  return <h1 className={styles.header}>{header}</h1>
}
function paragraphLead (paragraphLead) {
  return <p className={`${styles.paragraphLead} paragraphLead`}>{paragraphLead}</p>
}
function paragraphDefault (paragraphDefault) {
  return <p className='paragraphDefault'>{paragraphDefault}</p>
}

export default class TextBlockHead extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    paragraphLead: PropTypes.string,
    paragraphDefault: PropTypes.string
  }

  render () {
    return (
      <div className={styles.textblock}>
        {this.props.header ? header(this.props.header) : null}
        {this.props.paragraphLead ? paragraphLead(this.props.paragraphLead) : null}
        {this.props.paragraphDefault ? paragraphDefault(this.props.paragraphDefault) : null}
      </div>
    )
  }
}
