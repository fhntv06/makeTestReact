import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextBlockContent.module.scss'

function header (header) {
  return <h2 className={styles.title}>{header}</h2>
}
function paragraphDefault (paragraphDefault) {
  return <p className={'paragraphDefault'}>{paragraphDefault}</p>
}

export default class TextBlockContent extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    paragraphDefault: PropTypes.string
  }

  render () {
    return (
      <div className={styles.textblock}>
        {this.props.header ? header(this.props.header) : null}
        {this.props.paragraphDefault ? paragraphDefault(this.props.paragraphDefault) : null}
      </div>
    )
  }
}
