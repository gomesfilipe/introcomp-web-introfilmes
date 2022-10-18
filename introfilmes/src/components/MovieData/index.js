import styles from './MovieData.module.css'
import IconBlueStar from '../../assets/icons/icon-blue-star.svg'
import IconYellowStar from '../../assets/icons/icon-yellow-star.svg'
import IconTrash from '../../assets/icons/icon-trash.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Stars } from '../Stars'

export function MovieData({ name, year, description, photo, evaluation }) {
  const [stars, setStars] = useState([5, 4, 3, 2, 1])
  
  return (
    <div className={styles.container}>
      <div className={styles.photo}> {/* Foto do filme */}
        {/* <Image width="100%" height="100%" layout="fill" objectFit="contain" src={photo} /> Está renderizando imagem diferente */}
      </div>

      <div className={styles.movieData}> {/* Dados do filme */}
        <div className={styles.data}>
          <div className={styles.titleYear}> {/* Nome do filme e ano */}
            <h2>{name}</h2>
            <h3>{year}</h3>
          </div>
          
          <div className={styles.data}> {/* Avaliação do filme e botão de delete */}
            <Stars evaluation={evaluation} readOnly={true}/>
            <button className={styles.deleteButton}>
              <Image src={IconTrash} />
            </button>
          </div>
        </div>
        
        <div> {/* Descrição do filme */}
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
