import styles from './FormFilter.module.css'

export function FormFilter({ setMovies }) {
  return (
    <>
      <div> {/* arrow */}

      </div>
      
      <form className={styles.container}>
        <div className={styles.data}>
          <div>
            <input 
              type="text" 
              placeholder='Nome do filme'
              className={[styles.name, styles.myInput].join(' ')}
            />
          </div>

          <div>
            <input 
              type="number" 
              placeholder='Início do período (ano)'
              className={[styles.year, styles.myInput].join(' ')}
            />
            <input 
              type="number" 
              placeholder='Final do período (ano)'
              className={[styles.year, styles.myInput].join(' ')}
            />
          </div>

          <div>
            <input 
              type="number" 
              placeholder='Piso avaliação (0-5)'
              className={[styles.evaluation, styles.myInput].join(' ')}
            />
            <input 
              type="number" 
              placeholder='Teto avaliação (0-5)'
              className={[styles.evaluation, styles.myInput].join(' ')}
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
