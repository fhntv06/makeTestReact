import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextBlockContent.module.scss'

function h3Render (title) {
  return <h2 className={styles.title}>{title}</h2>
}
function p16Render (text) {
  return <p className='p_16'>{text}</p>
}

export default class TextBlock extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  }

  render () {
    return (
      <div className={styles.textblock}>
        {this.props.title ? h3Render(this.props.title) : null}
        {this.props.text ? p16Render(this.props.text) : null}
      </div>
    )
  }
}
