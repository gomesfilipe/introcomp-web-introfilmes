import { Popover } from '@headlessui/react'
import styles from './Filter.module.css'
import { FormFilter } from '../FormFilter'
import { useRef } from 'react'

export function Filter({ setMovies }) {
  const buttonRef = useRef(null)
  
  return (
    <Popover>
      <div>
        <Popover.Button className={styles.button} ref={buttonRef}>
          Filtros
        </Popover.Button>

        <Popover.Panel>
          <FormFilter setMovies={setMovies} buttonRef={buttonRef}/>
        </Popover.Panel>
      </div>
    </Popover>
  )
}
