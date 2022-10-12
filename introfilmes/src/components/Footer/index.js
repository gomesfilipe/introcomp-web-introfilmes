import styles from './Footer.module.css'
import Logo2 from '../../assets/logos/logo-2.svg'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Image src={Logo2} height={100} />
      </div>
      
      <div>
        <span>INTROCOMP 2022・Todos os direitos reservados</span>
      </div>
    </footer> 
  )
}
