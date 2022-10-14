import styles from './Movies.module.css'
import { Card } from "../Card";

export function Movies() {
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  return (
    <div className={styles.movies}>
      <h2>CATÁLOGO</h2>
      <div className={styles.cards}>
        {/* <ul> */}
          {
            movies.map((key, card) => {
              return (
                // <li>
                  <Card />
                // {/* </li>  */}
              ) 
            })
          }
        {/* </ul> */}
      </div>
    </div>
  )
}
