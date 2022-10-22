import styles from './MovieData.module.css'
import IconBlueStar from '../../assets/icons/icon-blue-star.svg'
import IconYellowStar from '../../assets/icons/icon-yellow-star.svg'
import IconTrash from '../../assets/icons/icon-trash.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Stars } from '../Stars'

export function MovieData({ name, year, description, photo, evaluation }) {
  return (
    <div className={styles.container}>
      <div className={styles.photo}> {/** foto */}
        <Image src={photo} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.data}> { /** dados */ }
        <div className={styles.dataUp}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.year}>{year}</span>
          </div>
          
          <div>
            <Stars evaluation={evaluation} readOnly={true} />
            <button className={styles.deleteButton}>
              <Image src={IconTrash} />
            </button>
          </div>
        </div>
        
        <div className={styles.dataDown}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
