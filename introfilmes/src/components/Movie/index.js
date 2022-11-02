import styles from './Movie.module.css'
import Image from 'next/image'
import { MovieData } from '../MovieData';
import { Popover } from '@headlessui/react';
import { useRef } from 'react';

export function Movie({ name, year, description, photo, evaluation, movies, setMovies, index, id }) {
  const movieRef = useRef(null)

  const myLoader=({src})=>{
    return `${src}`;
  }
  
  return (
    <Popover className={styles.popover}>
      <Popover.Button className={styles.popoverButton} ref={movieRef}>
        <Image 
          className={styles.photo} 
          loader={myLoader} 
          src={photo} 
          layout="fill" 
          objectFit="cover" 
        />
      </Popover.Button>
      
      <Popover.Panel>
        {({ close }) => (
          <MovieData 
            name={name} 
            year={year} 
            description={description} 
            photo={photo} 
            evaluation={evaluation}
            movies={movies}
            setMovies={setMovies}
            index={index}
            onDelete={() => {close()}}
            id={id}
            movieRef={movieRef}
          />
        )}
      </Popover.Panel>
    </Popover>
  )
}
