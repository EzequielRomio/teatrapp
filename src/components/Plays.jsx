import { useState, useEffect } from "react"
import { 
  THEATER, 
  ADDRES, 
  PHONE, 
  PLAY, 
  PRICE,
  TIME 
} from "../constants"
import { filterBillboardByDay } from '../actions'
import Play from "./Play"
import Th from "./Th"

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
    <div style={{marginLeft: '10px', marginRight: '10px'}} className='overflow-scroll'>
      <table style={{color: 'whitesmoke'}}>
        <thead style={{fontSize: '28px', textShadow: '2px 2px 5px blueviolet'}}>
          <tr>
            {[PLAY, TIME, THEATER, ADDRES, PHONE, PRICE].map((header, ix) => 
              <Th header={header} billboard={plays} setBillboard={setPlays} key={ix}/>
            )}
          </tr>
        </thead>
        <tbody>
          {plays && plays.length ? plays.map((play, ix) => <Play key={ix} play={play} />) : null}
        </tbody>
      </table>
    </div>
  )
}

export default Plays