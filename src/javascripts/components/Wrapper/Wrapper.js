import React from 'react'

import styles from './Wrapper.module.scss'

import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

export default class Wrapper extends React.Component {
  render () {
    return (
      <main className={styles.main}>
        <Header />
        <Content />
        <Footer/>
      </main>
    )
  }
}
