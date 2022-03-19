import { useState, useEffect } from "react"
import { 
  THEATER, 
  ADDRES, 
  DETAILS, 
  PHONE, 
  PLAY, 
  PRICE,
  TIME 
} from "../constants"
import { filterBillboardByDay } from '../actions'
import Play from "./Play"

const getDataToShow = (theaters, billboard, currentDay) => {
  const currentBillBoard = filterBillboardByDay(currentDay, billboard)
  return currentBillBoard.map(play => {
    const theater = theaters.find(t => t[THEATER] === play[THEATER])
    return {
      ...play, 
      [ADDRES]: theater[ADDRES], 
      [PHONE]: theater[PHONE]
    }
  })
}

const Plays = ({ theaters, billboard, currentDay }) => {
  const [plays, setPlays] = useState([])
  useEffect(() => {
    setPlays(getDataToShow(theaters, billboard, currentDay))
  }, [])
  return (
    <table style={{color: 'whitesmoke'}}>
      <thead style={{fontSize: '28px', textShadow: '2px 2px 5px blueviolet'}}>
        <tr>
          <th>{PLAY}</th>
          <th>{TIME}</th>
          <th>{THEATER}</th>
          <th>{ADDRES}</th>
          <th>{PHONE}</th>
          <th>{PRICE}</th>
        </tr>
      </thead>
      <tbody>
        {plays && plays.length && plays.map((play, ix) => <Play key={ix} play={play} />)}
      </tbody>
    </table>
  )
}

export default Plays