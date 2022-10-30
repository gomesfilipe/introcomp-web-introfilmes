import styles from './Card.module.css'
import AddBlueIcon from '../../assets/icons/icon-blue-add.svg'
import AddYellowIcon from '../../assets/icons/icon-yellow-add.svg'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Popover } from '@headlessui/react'
import { Form } from '../Form'


export function Card({ movies, setMovies }) {
  const [mouseOver, setMouseOver] = useState(false)
  const cardRef = useRef(null)

  return (
    <Popover>
      <Popover.Button 
        className={styles.button}
        onMouseEnter={() => {setMouseOver(true)}}
        onMouseLeave={() => {setMouseOver(false)}}
        ref={cardRef}
      >
            <div className={styles.image}>
                {
                  mouseOver ?
                  <Image src={AddYellowIcon} /> :
                  <Image src={AddBlueIcon} />
                }
            </div>
      </Popover.Button>

      <Popover.Panel>
        <Form movies={movies} setMovies={setMovies} cardRef={cardRef}/>
      </Popover.Panel>
    </Popover>
    
  )
}
