import styles from './Title.module.css'
import Image from 'next/image'
import theme from '../../theme/index'
import IconPopcorn from '../../assets/icons/icon-popcorn.svg'

export function Title() {
  return (
    <header className={styles.header}>
      <div className={styles.mainTitle}>
        <h1>INTROFILMES</h1>
        <p>Uma plataforma de filmes e séries para praticar conceitos de html, css e javascript.</p>
      </div>
      <div>
        <Image src={IconPopcorn} />
      </div>
    </header>
  )
}
