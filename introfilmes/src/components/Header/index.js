import styles from './Header.module.css'
import Image from 'next/image'
import Logo1 from '../../assets/logos/logo-1.svg'
import { theme } from '../../theme/index'

export function Header() {
  console.log('aaaa',theme)
  return (
    <header className={styles.header}>
      <div>
        <p>{theme}</p>
        
        <Image src={Logo1}/>
      </div>
      
      <div>

      </div>
    </header>
  )
}
