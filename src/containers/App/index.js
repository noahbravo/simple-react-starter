import React from 'react'
import { hot } from 'react-hot-loader'
import styles from './styles.sass'

const App = () => (
  <div className={styles.app}>
    <header className={styles.app__header}>
      <p>Hello World</p>
    </header>
  </div>
)

export default hot(module)(App)
