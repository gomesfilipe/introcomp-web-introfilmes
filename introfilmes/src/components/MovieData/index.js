import styles from './MovieData.module.css'
import IconTrash from '../../assets/icons/icon-trash.svg'
import Image from 'next/image'
import { Stars } from '../Stars'
import { api } from '../../lib/api'
import { useEffect, useRef, useState } from 'react'

export function MovieData({ name, year, description, photo, evaluation, movies, setMovies, index, onDelete, id, movieRef }) {
  const arrowRef = useRef(null)
  const [left, setLeft] = useState(null)

  async function handleClickDeleteButton() {
    try {
      if(!confirm(`Você tem certeza que quer apagar ${name}?`)) return
      await api.delete(`/movies/${id}`)
      setMovies(movies.filter((movie, indexMovie) => indexMovie !== index))
      onDelete() // Fecha o popover.
      alert(`${name} apagado com sucesso!`)

    } catch(err) {
      alert('Erro ao deletar filme.')
    }
  }

  useEffect(() => {
    const { offsetLeft, offsetWidth } = movieRef.current
    const { offsetWidth: arrowWidth } = arrowRef.current
    setLeft(offsetLeft + offsetWidth / 2 - arrowWidth)
  }, [])
  
  return (
    <>
      <div 
        className={styles.arrow} 
        ref={arrowRef} 
        style={{
          left: `${left}px`
      }}> 

      </div>
      <div className={styles.container}>
        <div className={styles.photo}>
          <Image src={photo} layout="fill" objectFit="cover" />
        </div>

        <div className={styles.data}>
          <div className={styles.dataUp}>
            <div>
              <span className={styles.name}>{name}</span>
              <span className={styles.year}>{year}</span>
            </div>
            
            <div>
              <Stars evaluation={evaluation} readOnly={true} />
              <button className={styles.deleteButton} onClick={handleClickDeleteButton}>
                <Image src={IconTrash} />
              </button>
            </div>
          </div>
          
          <div className={styles.dataDown}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
