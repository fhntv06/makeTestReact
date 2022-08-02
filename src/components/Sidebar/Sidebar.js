import React from 'react'

import styles from './Sidebar.module.scss'

export default class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  arTitles = [
    {
      title: 'Напутственное слово',
      id: 0,
      link: 'word'
    },
    {
      title: 'Сетка',
      id: 1,
      link: 'grid'
    },
    {
      title: 'Типографика',
      id: 2,
      link: 'typo'
    },
    {
      title: 'UI',
      id: 3,
      link: 'ui'
    }
  ]

  changeTitle (item) {
    // eslint-disable-next-line react/prop-types
    this.props.changeTitle(item.title)
    this.setState({
      active: item.id
    })
  }

  render () {
    return (
      <div className={styles.container}>
        <ul className={styles.ul}>
          {
            this.arTitles.map((item) =>
              <li key={item.id} className={styles.text}>
                <a href={`#${item.link}`} onClick={() => this.changeTitle(item)} className={`p_14 ${this.state.active === item.id ? styles.active : ''}`}>{item.title}</a>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
