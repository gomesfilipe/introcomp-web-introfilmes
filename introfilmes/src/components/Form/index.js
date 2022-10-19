import { Stars } from '../Stars'
import IconPhoto from '../../assets/icons/icon-photo.svg'
import Image from 'next/image'
import styles from './Form.module.css'

export function Form() {
  // const []
  
  return (
    <form className={styles.container}>
      <div className={styles.photo}>
        <Image src={IconPhoto} width={100} height={100}/>
        <input type="text" placeholder="Insira o link da capa" className={styles.link}/>
      </div>

      <div className={styles.data}> { /** dados */ }
        <div className={styles.dataUp}>
          <input type="text" placeholder="Insira o nome" className={[styles.name, styles.myInput].join(' ')} />
          <input type="text" placeholder="Insira o ano de criação" className={[styles.year, styles.myInput].join(' ')} />
          <Stars readOnly={false} />
        </div>
        
        <div className={styles.dataDown}>
          <input   
            placeholder="Insira uma breve sinopse" 
            className={[styles.description, styles.myInput].join(' ')}
          />
        </div>

        <div className={styles.submitButton}>
          <button type="submit">
            Salvar
          </button>
        </div>
      </div>
    </form>
  )
}
