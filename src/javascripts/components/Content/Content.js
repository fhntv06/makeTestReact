import React from 'react'

import styles from './Content.module.scss'

import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'

export default class Content extends React.Component {
  render () {
    return (
      <>
        <Sidebar />
        <Main />
      </>
    )
  }
}
