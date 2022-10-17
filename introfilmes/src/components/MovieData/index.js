import styles from './MovieData.module.css'
import IconBlueStar from '../../assets/icons/icon-blue-star.svg'
import IconYellowStar from '../../assets/icons/icon-yellow-star.svg'
import IconTrash from '../../assets/icons/icon-trash.svg'
import Image from 'next/image'
import { useState } from 'react'

export function MovieData({ name, year, description, photo, evaluation }) {
  const [stars, setStars] = useState([5, 4, 3, 2, 1])
  
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        {/* Foto do filme */}
        <Image width={100} height={100} src={photo} /> {/* Está renderizando imagem diferente */}
      </div>

      <div className={styles.movieData}>
        {/* Dados do filme */}
        <div className={styles.test}> {/* Mudar nome dessa classe depois */}
          <div>
            {/* Nome do filme */}
            {name}
          </div>
          <div>
            {/* Ano do filme */}
            {year}
          </div>
          <div>
            {/* Avaliação do filme */}
            {
              stars.map((item, index) => {
                if(item > evaluation) {
                  return (
                    <Image key={index} src={IconBlueStar} />
                  )
                } else {
                  return (
                    <Image key={index} src={IconYellowStar} />
                  )
                }
              })
            }
            
          </div>
          <div>
            {/* Ícone da lixeira */}
            <Image src={IconTrash} />
          </div>
        </div>
        
        <div>
          {/* Descrição do filme */}
          {description}
        </div>
      </div>
    </div>
  )
}
