import { Stars } from '../Stars'
import styles from './Form.module.css'

export function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
  
      </div>

      <div className={styles.data}> { /** dados */ }
        <div className={styles.dataUp}>
          <Stars readOnly={false} />
        </div>
        
        <div className={styles.dataDown}>

        </div>

        <div>
          <button>
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
