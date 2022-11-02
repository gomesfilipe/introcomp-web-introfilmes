import { useEffect, useRef, useState } from 'react'
import { api } from '../../lib/api'
import styles from './FormFilter.module.css'

export function FormFilter({ setMovies, buttonRef }) {
  const [name, setName] = useState('')
  const [yearDown, setYearDown] = useState(1)
  const [yearUp, setYearUp] = useState(3000)
  const [evaluationDown, setEvaluationDown] = useState(0)
  const [evaluationUp, setEvaluationUp] = useState(5)
  
  const arrowRef = useRef(null)
  const [left, setLeft] = useState(null)
  
  useEffect(() => {
    const { offsetLeft, offsetWidth } = buttonRef.current
    const { offsetWidth: arrowWidth } = arrowRef.current
    setLeft(offsetLeft + offsetWidth / 2 - arrowWidth)
  }, [])

  async function handleSubmitFilter(event) {
    event.preventDefault()
    // const queries = {
    //   name,
    //   yearDown,
    //   yearUp,
    //   evaluationDown,
    //   evaluationUp
    // }
    
    try {
      // const res = await api.get(`/movies/filter?name=${name}&yearDown=${yearDown}&yearUp=${yearUp}&evaluationDown=${evaluationDown}&evaluationUp=${evaluationUp}`)
      const res = await api.get(`/movies/filter`, {
        params: {
          name: name ? name : undefined,
          yearDown: yearDown ? yearDown : undefined,
          yearUp: yearUp ? yearUp : undefined,
          evaluationDown: evaluationDown ? evaluationDown : undefined,
          evaluationUp: evaluationUp ? evaluationUp : undefined,
        }
      })
      
      setMovies(res.data)
    } catch(err) {
      console.log(err)
      alert('Erro ao filtrar filmes.')
    }
  }

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
      
      <form className={styles.container} onSubmit={handleSubmitFilter}>
        <div className={styles.data}>
          <div>
            <input 
              type="text" 
              placeholder='Nome do filme'
              className={[styles.name, styles.myInput].join(' ')}
              onChange={(e) => {setName(e.target.value)}}
            />
          </div>

          <div>
            <input 
              type="number" 
              placeholder='Início do período (ano)'
              className={[styles.year, styles.myInput].join(' ')}
              onChange={(e) => {setYearDown(Number(e.target.value))}}
            />
            <input 
              type="number" 
              placeholder='Final do período (ano)'
              className={[styles.year, styles.myInput].join(' ')}
              onChange={(e) => {setYearUp(Number(e.target.value))}}
            />
          </div>

          <div>
            <input 
              type="number" 
              placeholder='Piso avaliação (0-5)'
              className={[styles.evaluation, styles.myInput].join(' ')}
              onChange={(e) => {setEvaluationDown(Number(e.target.value))}}
            />
            <input 
              type="number" 
              placeholder='Teto avaliação (0-5)'
              className={[styles.evaluation, styles.myInput].join(' ')}
              onChange={(e) => {setEvaluationUp(Number(e.target.value))}}
            />
          </div>

          <div className={styles.submitButton}>
            <button type="submit">
              Filtrar
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
