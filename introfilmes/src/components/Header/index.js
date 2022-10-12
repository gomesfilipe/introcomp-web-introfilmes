import styles from './Header.module.css'
import Image from 'next/image'
import Logo1 from '../../assets/logos/logo-1.svg'
import theme from '../../theme/index'

export function Header() {
  return (
    <header className={styles.header}>
        <Image src={Logo1} />
    </header>
  )
}
