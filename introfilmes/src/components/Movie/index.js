import styles from './Movie.module.css'
import Image from 'next/image'
import { MovieData } from '../MovieData';

export function Movie({ name, year, description, photo, evaluation }) {
  const myLoader=({src})=>{
    return `${src}`;
  }
  
  return (
    <div>
      <div className={styles.movie}>
        <button className={styles.button}>
          <div className={styles.image}>
            <Image className={styles.photo} loader={myLoader} src={photo} width={203} height ={299} />
          </div>
        </button>
      </div>
  
      <MovieData name={name} year={year} description={description} photo={photo} evaluation={evaluation}/>
    </div>
  )
}
