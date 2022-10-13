import styles from './Card.module.css'
import AddIcon from '../../assets/icons/icon-blue-add.svg'
import Image from 'next/image'

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <button className={styles.button}>
          <Image src={AddIcon} />
        </button>
      </div>
    </div>
  )
}
