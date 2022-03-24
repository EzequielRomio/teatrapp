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
    <div className='table-container'>
      <table style={{color: 'whitesmoke'}}>
        <thead style={{fontSize: '28px', textShadow: '6px 6px 10px #000'}} className={'title-font'}>
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