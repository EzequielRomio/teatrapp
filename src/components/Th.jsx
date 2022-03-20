import { useState } from "react"
import { sortPlays } from "../actions" 
import { PHONE } from "../constants"

const Th = ( { header, setBillboard, billboard } ) => {
  const [isAsc, setIsAsc] = useState(false)  
  const handleClick = (e) => {
    e.preventDefault()
    if (header !== PHONE) {
      setBillboard(sortPlays(billboard, header, isAsc))
      setIsAsc(!isAsc)
    }
  }
  return (
    <th onClick={handleClick}>
      {header}    
    </th>
  )  
}

export default Th