import { Stars } from '../Stars'
import IconPhoto from '../../assets/icons/icon-photo.svg'
import Image from 'next/image'
import styles from './Form.module.css'
import { useState } from 'react'

export function Form({ movies, setMovies }) {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [evaluation, setEvaluation] = useState(0)
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  
  function handleSubmitForm(event) {
    console.log(event)
    console.log('entrou funcao')
    event.preventDefault()
    const newMovie = {
      name,
      year, 
      evaluation,
      description,
      photo
    }
    setMovies([...movies, newMovie])
  }

  return (
    <form className={styles.container} onSubmit={(e) => {handleSubmitForm(e)}}>
      <div className={styles.photo}>
        <Image src={IconPhoto} width={100} height={100} />
        <input 
          type="text" 
          placeholder="Insira o link da capa" 
          className={styles.link}
          onChange={(e) => {setPhoto(e.target.value)}}
        />
      </div>

      <div className={styles.data}>
        <div className={styles.dataUp}>
          <input 
            type="text" 
            placeholder="Insira o nome" 
            className={[styles.name, styles.myInput].join(' ')} 
            onChange={(e) => {setName(e.target.value)}}
          />
          <input 
            type="text" 
            placeholder="Insira o ano de criação" 
            className={[styles.year, styles.myInput].join(' ')} 
            onChange={(e) => {setYear(e.target.value)}}
          />
          <Stars readOnly={false} setEvaluation={setEvaluation} />
        </div>
        
        <div className={styles.dataDown}>
          <input   
            placeholder="Insira uma breve sinopse" 
            className={[styles.description, styles.myInput].join(' ')}
            onChange={(e) => {setDescription(e.target.value)}}
          />
        </div>

        <div className={styles.submitButton}>
          <button 
            type="submit" 
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  )
}
