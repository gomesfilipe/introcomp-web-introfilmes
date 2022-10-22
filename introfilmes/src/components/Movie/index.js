import styles from './Movie.module.css'
import Image from 'next/image'
import { MovieData } from '../MovieData';
import { Popover } from '@headlessui/react';

export function Movie({ name, year, description, photo, evaluation, movies, setMovies, index }) {
  const myLoader=({src})=>{
    return `${src}`;
  }
  
  console.log('movie: ', index)
  return (
    <Popover className={styles.popover}>
      <Popover.Button className={styles.popoverButton}>
        <Image 
          className={styles.photo} 
          loader={myLoader} 
          src={photo} 
          layout="fill" 
          objectFit="cover" 
        />
      </Popover.Button>

      <Popover.Panel>
        <MovieData 
          name={name} 
          year={year} 
          description={description} 
          photo={photo} 
          evaluation={evaluation}
          movies={movies}
          setMovies={setMovies}
          index={index}
        />
      </Popover.Panel>
    </Popover>
  )
}
