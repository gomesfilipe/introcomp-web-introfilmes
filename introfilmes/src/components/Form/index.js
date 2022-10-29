import { Stars } from '../Stars'
import IconPhoto from '../../assets/icons/icon-photo.svg'
import Image from 'next/image'
import styles from './Form.module.css'
import { useRef, useState } from 'react'
import { api } from '../../lib/api'

export function Form({ movies, setMovies }) {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [evaluation, setEvaluation] = useState(0)
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  
  const [fileName, setFileName] = useState('')
  const hiddenFileInput = useRef(null);

  function handleDisabledSubmit() {
    return !name || !year || !evaluation || !description || !photo
  }

  function handleUploadPhoto(event) {
    const reader = new FileReader()

    reader.onload = function (e) {
      setPhoto(e.target.result)
    } 
    
    reader.readAsDataURL(event.target.files[0])
    setFileName(event.target.files[0].name)
  }

  async function handleSubmitForm(event) {
    event.preventDefault()

    if(!name || !year || !evaluation || !description || !photo) {
      alert('Há campos em branco!')
      return
    }

    if(isNaN(year) || isNaN(evaluation) || year < 0 || evaluation < 0) {
      alert('A avaliação e o ano devem ser números não negativos.')
      return
    }

    const newMovie = {
      name,
      year, 
      evaluation,
      description,
      photo
    }

    try {
      await api.post('/movies', newMovie)
      alert(`${name} cadastrado com sucesso!`)
    } catch(err) {
      alert('Erro ao cadastrar filme.')
    }
    setMovies([...movies, newMovie])
  }

  function handleClickUpload(event) {
    event.preventDefault()
    hiddenFileInput.current.click();
  }

  return (
    <form className={styles.container} onSubmit={(e) => {handleSubmitForm(e)}}>
      <div className={styles.photo}>
        <Image src={IconPhoto} width={100} height={100} />
        <div className={styles.upload}>
          <button onClick={handleClickUpload}>
            Escolher Arquivo
          </button>
          <div>
            {fileName}
          </div>
          
        </div>
        
        <input 
          type="file" 
          ref={hiddenFileInput} 
          className={styles.link}
          onChange={handleUploadPhoto}
        />
      </div>

      <div className={styles.data}>
        <div className={styles.dataUp}>
          <div>
            <input 
              type="text" 
              placeholder="Insira o nome" 
              className={[styles.name, styles.myInput].join(' ')} 
              onChange={(e) => {setName(e.target.value)}}
            />
          </div>
          <div>
            <input 
              type="number"
              placeholder="Insira o ano de criação" 
              className={[styles.year, styles.myInput].join(' ')} 
              onChange={(e) => {setYear(e.target.value)}}
            />
          </div>
          <div>
            <Stars readOnly={false} setEvaluation={setEvaluation} />
          </div>
        </div>
        
        <div className={styles.dataDown}>
          <input   
            placeholder="Insira uma breve sinopse" 
            className={[styles.description, styles.myInput].join(' ')}
            onChange={(e) => {setDescription(e.target.value)}}
          />
        </div>

        <div className={styles.submitButton}>
          <button type="submit" disabled={handleDisabledSubmit()}>
            Salvar
          </button>
        </div>
      </div>
    </form>
  )
}
