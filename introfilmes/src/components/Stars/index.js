import styles from './Stars.module.css'
import IconBlueStar from '../../assets/icons/icon-blue-star.svg'
import IconYellowStar from '../../assets/icons/icon-yellow-star.svg'
import { useState } from 'react'
import Image from 'next/image'

export function Stars({ evaluation, readOnly, setEvaluation }) {
  const [stars, setStars] = useState([5, 4, 3, 2, 1])
  const [screenEvaluation, setScreenEvaluation] = useState(evaluation || 0)
  const [realEvaluation, setRealEvaluation] = useState(evaluation || 0)

  function handleMouseEnter(evaluation) {
    if(readOnly) return
    setScreenEvaluation(evaluation)
  }

  function handleMouseLeave() {
    if(readOnly) return
    setScreenEvaluation(realEvaluation)
  } 

  function handleClick(event, evaluation) {
    event.preventDefault()
    if(readOnly) return
    setRealEvaluation(evaluation)
    setScreenEvaluation(evaluation)
    setEvaluation(evaluation)
  }

  return (
    <div className={styles.container}>
      {
        stars.map((item, index) => {
          return (
            <button 
              key={index} 
              className={styles.button}
              onMouseEnter={() => {handleMouseEnter(item)}} 
              onMouseLeave={handleMouseLeave} 
              onClick={(e) => {handleClick(e, item)}}
            > 
              <Image src={item > screenEvaluation ? IconBlueStar : IconYellowStar} />
            </button>
          )
        })
      }
    </div>
  )
}
