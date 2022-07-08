import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextBlockHead.module.scss'
// разбитьы

function h1Render (title) {
  return <h1 className={styles.h1}>{title}</h1>
}
function pLeadRender (text) {
  return <p className={styles.text}>{text}</p>
}

export default class TextBlock extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  }

  render () {
    return (
      <div className={styles.textblock}>
        {this.props.title ? h1Render(this.props.title) : null}
        {this.props.text ? pLeadRender(this.props.text) : null}
      </div>
    )
  }
}
