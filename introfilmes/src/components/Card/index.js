import styles from './Card.module.css'
import AddBlueIcon from '../../assets/icons/icon-blue-add.svg'
import AddYellowIcon from '../../assets/icons/icon-yellow-add.svg'
import Image from 'next/image'
import { useState } from 'react'


export function Card() {
  const [mouseOver, setMouseOver] = useState(false)
  
  return (
    <div className={styles.card}
      onMouseEnter={() => {setMouseOver(true)}}
      onMouseLeave={() => {setMouseOver(false)}}
    >
      <button className={styles.button}>
        <div className={styles.image}>
            {
              mouseOver ?
              <Image src={AddYellowIcon} /> :
              <Image src={AddBlueIcon} />
            }
        </div>
      </button>
    </div>
  )
}
