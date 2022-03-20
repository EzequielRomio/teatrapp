import { useState } from "react"
import { sortPlays } from "../actions" 
import { PHONE } from "../constants"
import arrow from '../assets/arrow.png'

const Th = ( { header, setBillboard, billboard } ) => {
  const [isAsc, setIsAsc] = useState(false)  
  const handleClick = (e) => {
    e.preventDefault()
    setBillboard(sortPlays(billboard, header, isAsc))
    setIsAsc(!isAsc)
  }
  return (
    <th>
      <span style={{marginLeft: header !== PHONE ? '40px' : '0px'}}>
        {header}
      </span>
      {
        header !== PHONE ?
          <button onClick={handleClick}>
            <img src={arrow} alt='change sorting' width='15px' style={{marginLeft: '20px', transform: isAsc ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>    
          </button>
          :
          null
      }

    </th>
  )  
}

export default Th