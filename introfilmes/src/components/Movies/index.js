import styles from './Movies.module.css'
import { Card } from "../Card";
import { useEffect, useState } from 'react';
import { Movie } from '../Movie';

const moviesList = Array.from({ length: 9 }, () => {
  return {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  }
})

export function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(moviesList)
  } , [moviesList])

  return (
    <div className={styles.movies}>
      <h2>CATÁLOGO</h2>
      <div className={styles.cards}>
          {
            movies.map((movie, index) => {
              return (
                <Movie 
                  key={index} 
                  name={movie.name} 
                  year={movie.year} 
                  description={movie.description} 
                  photo={movie.photo} 
                  evaluation={movie.evaluation} 
                  movies = {movies}
                  setMovies={setMovies}
                  index={index}
                />
              ) 
            })
          }
          <Card key={movies.length} movies={movies} setMovies={setMovies} />
      </div>
    </div>
  )
}
