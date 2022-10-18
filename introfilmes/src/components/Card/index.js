import styles from './Card.module.css'
import AddBlueIcon from '../../assets/icons/icon-blue-add.svg'
import AddYellowIcon from '../../assets/icons/icon-yellow-add.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { Form } from '../Form'


export function Card() {
  const [mouseOver, setMouseOver] = useState(false)
  
  return (
    <Popover>
      <Popover.Button 
        className={styles.button}
        onMouseEnter={() => {setMouseOver(true)}}
        onMouseLeave={() => {setMouseOver(false)}}
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
        <Form />
      </Popover.Panel>
    </Popover>
    
  )
}
