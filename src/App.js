import { useState, useEffect } from 'react'
import { getTheaters, getDay, getBillboard } from './actions';
// import Theaters from './components/Theaters';
import Plays from './components/Plays';
import Title from './components/Title';
import './App.css';
import { Helmet } from 'react-helmet'

function App() {
  const [theaters, setTheaters] = useState([])
  const [currentDay, setCurrentDay] = useState(0)
  const [billboard, setBillboard] = useState([])

  useEffect(() => {
    setTheaters(getTheaters)
    setCurrentDay(getDay)
    setBillboard(getBillboard)
  }, [])

  return (
    <div className="App">
      <Title />
      <hr style={{height: '26px', backgroundColor: '#BC8F8F'}}></hr>
      {theaters && theaters.length && billboard && billboard.length && <Plays theaters={theaters} billboard={billboard} currentDay={currentDay} />}
      {/* {theaters && theaters.length && <Theaters theaters={theaters}/>} */}
    </div>
  );
}

export default App;
