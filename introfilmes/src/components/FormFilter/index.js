import { useEffect, useRef, useState } from 'react'
import { api } from '../../lib/api'
import styles from './FormFilter.module.css'

export function FormFilter({ setMovies, buttonRef }) {
  const [filters, setFilters] = useState({ 
    name: '', 
    yearDown: '',
    yearUp: '',
    evaluationDown: '',
    evaluationUp: ''
  })
  
  const arrowRef = useRef(null)
  const [left, setLeft] = useState(null)
  
  useEffect(() => {
    const { offsetLeft, offsetWidth } = buttonRef.current
    const { offsetWidth: arrowWidth } = arrowRef.current
    setLeft(offsetLeft + offsetWidth / 2 - arrowWidth)
  }, [])

  async function handleSubmitFilter(event) {
    event.preventDefault()
    
    const innerFilters = {
      ...filters
    }

    for (let prop in innerFilters) {
      if (innerFilters[prop] === null || innerFilters[prop] === undefined || innerFilters[prop] === '') {
        delete innerFilters[prop];
      }
    }

    if(innerFilters.yearDown)  innerFilters.yearDown = Number(innerFilters.yearDown)
    if(innerFilters.yearUp) innerFilters.yearUp = Number(innerFilters.yearUp)
    if(innerFilters.evaluationDown) innerFilters.evaluationDown = Number(innerFilters.evaluationDown)
    if(innerFilters.evaluationUp) innerFilters.evaluationUp = Number(innerFilters.evaluationUp)

    try {
      const res = await api.get(`/movies/filter`, {
        params: {
          ...innerFilters
        }
      })
      
      setMovies(res.data)
    } catch(err) {
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
              onChange={(e) => {setFilters({...filters, name: e.target.value })}}
            />
          </div>

          <div>
            <input 
              type="number" 
              placeholder='Início do período (ano)'
              className={[styles.year, styles.myInput].join(' ')}
              onChange={(e) => {setFilters({...filters, yearDown: e.target.value })}}
            />
            <input 
              type="number" 
              placeholder='Final do período (ano)'
              className={[styles.year, styles.myInput].join(' ')}
              onChange={(e) => {setFilters({...filters, yearUp: e.target.value })}}
            />
          </div>

          <div>
            <input 
              type="number" 
              placeholder='Piso avaliação (0-5)'
              className={[styles.evaluation, styles.myInput].join(' ')}
              onChange={(e) => {setFilters({...filters, evaluationDown: e.target.value })}}
            />
            <input 
              type="number" 
              placeholder='Teto avaliação (0-5)'
              className={[styles.evaluation, styles.myInput].join(' ')}
              onChange={(e) => {setFilters({...filters, evaluationUp: e.target.value })}}
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
