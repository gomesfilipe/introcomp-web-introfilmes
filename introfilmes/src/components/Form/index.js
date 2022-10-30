import { Stars } from '../Stars'
import IconPhoto from '../../assets/icons/icon-photo.svg'
import Image from 'next/image'
import styles from './Form.module.css'
import { useEffect, useRef, useState } from 'react'
import { api } from '../../lib/api'
import FormData from 'form-data'

export function Form({ movies, setMovies, cardRef }) {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [evaluation, setEvaluation] = useState(0)
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  
  const [fileName, setFileName] = useState('')
  const hiddenFileInput = useRef(null);
  const [photoBase64, setPhotoBase64] = useState('')

  const arrowRef = useRef(null)
  const [left, setLeft] = useState(null)

  function parseFileToBase64(file) {
    const reader = new FileReader()

    reader.onload = function (e) {
      setPhotoBase64(e.target.result) // Imagem em base64
    } 

    reader.readAsDataURL(file)
  }
  
  function handleDisabledSubmit() {
    return !name || !year || !description || !photo
  }

  function handleUploadPhoto(event) {
    parseFileToBase64(event.target.files[0])
    setFileName(event.target.files[0].name)
    setPhoto(event.target.files[0])
  }

  async function handleSubmitForm(event) {
    event.preventDefault()

    if(!name || !year || !description || !photo) {
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
      photo: photoBase64
    }

    // const form = new FormData()
    // form.append('name', name)
    // form.append('year', year)
    // form.append('evaluation', evaluation)
    // form.append('description', description)
    // form.append('photo', photo)

    try {
      await api.post('/movies', newMovie)
      // await api.post('/movies', form)
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

  useEffect(() => {
    const { offsetLeft, offsetWidth } = cardRef.current
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
        }}
      >
      </div>
      
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
    
    </>
  )
}
