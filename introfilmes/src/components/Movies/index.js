import styles from './Movies.module.css'
import { Card } from "../Card";
import { useEffect, useState } from 'react';
import { Movie } from '../Movie';

const moviesList = [
  {
    name: 'O Rei Leão',
    year: 1994,
    description: 'Rei leão blablabla',
    photo: 'https://picsum.photos/500/800',
    evaluation: 3
  },
  {
    name: 'Toy Story',
    year: 2000,
    description: 'Toy story blablabla',
    photo: 'https://picsum.photos/400/800',
    evaluation: 5
  },
  {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  },
  {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  },
  {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  },
  {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  },
  {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  },
  {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  },
  {
    name: 'Os incríveis',
    year: 2005,
    description: 'Os incríveis blablabla',
    photo: 'https://picsum.photos/700/800',
    evaluation: 5
  },
]

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
                />
              ) 
            })
          }
          <Card key={movies.length} />
      </div>
    </div>
  )
}
